const {google} = require('googleapis');
const fs = require('fs');
const moment = require('moment');
const key = require('../secure/key.json');
 
const ids = require('../secure/ids.json'); // Google Analytics view ID
const viewId = ids.viewID;
const jwtClient = new google.auth.JWT(key.client_email,
                                    null,
                                    key.private_key,
                                    ['https://www.googleapis.com/auth/analytics.readonly'],
                                    null);
const analytics = google.analyticsreporting('v4');

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.log('Reeeeejected');
    console.log(err);
    return;
  } 
});

const now = moment();

const thisWeek = query({
  viewId,
  "dateRanges": [{ 
    'startDate': moment(now).subtract(1, 'day').day(0).format('YYYY-MM-DD'),
    'endDate': moment(now).format('YYYY-MM-DD')
  }],
  "dimensions": [
    {
      "name": "ga:date"
    },
    {
      "name": "ga:nthDay"
    }
  ],
  "metrics":[{
    "expression":"ga:sessions"
  }]
});

const lastWeek = query({
  viewId,
  "dateRanges": [{ 
    'startDate': moment(now).subtract(1, 'day').day(0).subtract(1, 'week').format('YYYY-MM-DD'),
    'endDate': moment(now).subtract(1, 'day').day(6).subtract(1, 'week').format('YYYY-MM-DD')
  }],
  "dimensions": [
    {
      "name": "ga:date"
    },
    {
      "name": "ga:nthDay"
    }
  ],
  "metrics":[{
    "expression":"ga:sessions"
  }]
});

const thisYear = query({
  viewId,
  "dateRanges": [{ 
		'startDate': moment(now).date(1).month(0).format('YYYY-MM-DD'),
		'endDate': moment(now).format('YYYY-MM-DD')
  }],
  "dimensions": [
    {
      "name": "ga:month"
    },
    {
      "name": "ga:nthMonth"
    }
  ],
  "metrics":[{
    "expression":"ga:users"
  }]
});

const lastYear = query({
  viewId,
  "dateRanges": [{ 
		'startDate': moment(now).subtract(1, 'year').date(1).month(0).format('YYYY-MM-DD'),
		'endDate': moment(now).date(1).month(0).subtract(1, 'day').format('YYYY-MM-DD')
  }],
  "dimensions": [
    {
      "name": "ga:month"
    },
    {
      "name": "ga:nthMonth"
    }
  ],
  "metrics":[{
    "expression":"ga:users"
  }]
});
const today = moment(now).date(1).format('YYYY-MM-DD');
const allTime = query({
  viewId,
  "dateRanges": [{ 
		'startDate': "2012-01-01",
		'endDate': today
  }],
  "metrics":[{
    "expression":"ga:pageViews"
  }]
});
 
function query(request) {
  const req = {
    reportRequests: [request],
  };
  return new Promise(function(resolve, reject) {
    analytics.reports.batchGet(
      {
        'auth': jwtClient,
        resource: req
      },
      (err, response) => {
        if (err) {
          console.log('Failed to get Report');
          console.log(err);
          reject(err);
          return;
        }
        resolve(response);
      }
    );
  });
}

Promise.all([thisWeek, lastWeek, thisYear, lastYear, allTime]).then((results) => {
  const thisWeek = results[0].data.reports[0].data.rows.map((row) => { return +row.metrics[0].values; });
  const lastWeek = results[1].data.reports[0].data.rows.map((row) => { return +row.metrics[0].values; });
  const thisYear = results[2].data.reports[0].data.rows.map((row) => { return +row.metrics[0].values; });
  const lastYear = results[3].data.reports[0].data.rows.map((row) => { return +row.metrics[0].values; });
  const allTime = results[4].data.reports[0].data.rows.map((row) => { return +row.metrics[0].values; });
  const data = {
    thisWeek,
    lastWeek,
    thisYear,
    lastYear,
    allTime
  }
  fs.writeFileSync('analytics.json', JSON.stringify(data, null, 2));  
});

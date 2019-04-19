import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import {Link} from 'react-router-dom';
import analytics from './api/analytics';
import NumberFormat from 'react-number-format';
import {Line, Bar} from 'react-chartjs-2';

class Home extends Component {
  state = {
    analytics
  }

  render() {
    console.log(this.state.analytics);
    const { thisWeek, lastWeek, thisYear, lastYear } = this.state.analytics;
    const allTime = parseInt(this.state.analytics.allTime);

    const weekData = {
      labels : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
      datasets : [
        {
          label: 'This Week',
          backgroundColor: 'rgba(16,118,188,0.5)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          data: thisWeek
        },
        {
          label: 'Last Week',
          backgroundColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          data: lastWeek
        }
      ]
    };

    const yearData = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        {
          label: 'Last Year',
          backgroundColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,1)',
          data: lastYear
        },
        {
          label: 'This Year',
          backgroundColor: 'rgba(16,118,188,0.5)',
          strokeColor: 'rgba(151,187,205,1)',
          data: thisYear
        }
      ]
    };

    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Dashboard</h1>
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Datasets</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">225</h1>
                    <Link className="btn btn-lg btn-block btn-outline-primary" to="/datasets">edit datasets</Link>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Page visits</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title"><NumberFormat value={allTime} displayType={'text'} thousandSeparator={true} /></h1>
                  <a href="#analytics" className="btn btn-lg btn-block btn-primary">view details</a>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Comments</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">415</h1>
                  <Link to="/comments" className="btn btn-lg btn-block btn-primary">manage comments</Link>
                </div>
              </div>
            </div>
              <div className="row">
                <div className="col">
                  <h2 id="analytics">Analytics</h2>
                  <p>This section details key data about your site.</p>
                </div>
              </div>
              <div className="row" style={{margin: "1px"}}>
                <div className="col-6 col-lg-6 col-md-6 p-0">
                  <h3>Last Week vs This Week</h3>
                  <h4>by sessions</h4>
                  <Line data={weekData} legend={{display: true}} />
                </div>
                <div className="col-6 col-lg-6 col-md-6 p-0">
                  <h3>This Year vs Last Year</h3>
                  <h4>by users</h4>
                  <Bar data={yearData} legend={{display: true}} />
                </div>
              </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;

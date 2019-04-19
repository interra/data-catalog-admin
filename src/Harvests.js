import React, { Component } from 'react';
import { HarvestConsumer } from './context/HarvestContext';
import Sidebar from './components/Sidebar';
import Loader from 'react-loader';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

class Harvests extends Component {

  render() {
    const columns = [{
      Header: 'Title',
      accessor: 'sourceId'
    },
    {
      Header: 'Type',
      accessor: 'source.type'
    },
    {
      Header: 'URL',
      accessor: 'source.uri'
    },
    {
      Header: 'View',
      accessor: 'sourceId',
      Cell: props => (
        <Link className='scenarioDetailLink'
            to={`/harvest/${props.value}`}
            id='view'>view</Link>
          )
    },
    {
      Header: 'Edit',
      accessor: 'sourceId',
      Cell: props => (
        <Link 
            to={`/harvest/${props.value}/edit`}
            id='edit'>edit</Link>
          )
    }
  ]

    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Harvests</h1>
            <p>
              <Link className="btn btn-primary" to="/add-harvest">Add Harvest</Link>
            </p>
            <HarvestConsumer>

              {({ harvests }) => (
                <>
                {harvests ? (
                  <div>
                     <ReactTable
                      data={harvests}
                      showPageSizeOptions={false}
                      defaultPageSize={5}
                      columns={columns} />
                    </div>
                ) :    (
                  <Loader />
                )}
                </>
              )}
            </HarvestConsumer>
          </main>
        </div>
      </div>
    );
  }
}

export default Harvests;

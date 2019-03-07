import React, { Component } from 'react';
import { DatasetConsumer } from './context/DatasetContext';
import Sidebar from './components/Sidebar';
import Loader from 'react-loader';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

class Datasets extends Component {

  render() {
    const columns = [{
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Modified',
      accessor: 'modified'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Header: 'Edit',
      accessor: 'interra.id',
      Cell: props => (
        <Link className='scenarioDetailLink'
            to={`/dataset/${props.value}`}
            id='edit'>edit</Link>
          )
    }
  ]

    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Datasets</h1>
            <DatasetConsumer>
              {({ datasets }) => (
                <>
                {datasets ? (
                  <div>
                     <ReactTable
                      data={datasets}
                      showPageSizeOptions={false}
                      defaultPageSize={10}
                      columns={columns} />
                    </div>
                ) :    (
                  <Loader />
                )}
                </>
              )}
            </DatasetConsumer>
          </main>
        </div>
      </div>
    );
  }
}

export default Datasets;

import React, { Component } from 'react';
import { GroupConsumer } from './context/GroupContext';
import Sidebar from './components/Sidebar';
import Loader from 'react-loader';
import ReactTable from 'react-table';

class Groups extends Component {

  render() {
    const columns = [
      {
        Header: 'Title',
        accessor: 'name'
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
        accessor: 'edit'
      }
    ];
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Groups</h1>
              <GroupConsumer>
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
              </GroupConsumer>
          </main>
        </div>
      </div>
    );
  }
}

export default Groups;

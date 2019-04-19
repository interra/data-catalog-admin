import React, { Component } from 'react';
import { CommentConsumer } from './context/CommentContext';
import Sidebar from './components/Sidebar';
import Loader from 'react-loader';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

class Comments extends Component {

  render() {
    const columns = [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Modified',
        accessor: 'modified'
      },
      {
        Header: 'Body',
        accessor: 'body'
      },
      {
        Header: 'Edit',
        accessor: 'identifier',
        Cell: props => (
          <Link className='scenarioDetailLink'
              to={`/comment/${props.value}`}
              id='edit'>edit</Link>
            )
      }
    ];
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Comments</h1>
            <CommentConsumer>
              {({ comments }) => (
                <>
                {comments ? (
                  <div>
                     <ReactTable
                      data={comments}
                      showPageSizeOptions={false}
                      defaultPageSize={10}
                      columns={columns} />
                    </div>
                ) :    (
                  <Loader />
                )}
                </>
              )}
            </CommentConsumer>
          </main>
        </div>
      </div>
    );
  }
}

export default Comments;

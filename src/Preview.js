import React, { Component } from 'react';
import { FileConsumer } from './context/FileContext';
import { Redirect } from 'react-router'
import Loader from 'react-loader';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import filesize from 'filesize';
import Sidebar from './components/Sidebar';
import Pager from './components/Pager';

class Preview extends Component {


  render() {
    return (
      <div class="container-fluid h-100">
        <div class="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Preview</h1>
            <p className="lead">This is the preview page.</p>
            <FileConsumer>
              {({ file, data, step, metadata, updateMetadata }) => (
                <div>
                    {step !== "preview" && (
                      <Redirect to="/" />
                    )}
                    {file && data ? (
                      <div>
                        <input id="title" onChange={updateMetadata} value={metadata.title} type="text" />
                        <p>
                          <strong>Name:</strong> {file.name}<br/>
                          <strong>Size:</strong> {filesize(file.size)}
                        </p>
                        <p>
                        </p>
                         <ReactTable
                          data={data.data}
                          defaultPageSize={5}
                          columns={data.cols} />
                      </div>
                    ) : (
                      <Loader />
                    )}
                </div>
              )}
            </FileConsumer>
            <Pager />
          </main>
        </div>
      </div>
    );
  }
}

export default Preview;

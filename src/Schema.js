import React, { Component } from 'react';
import { FileConsumer } from './context/FileContext';
import { Redirect } from 'react-router'
import Loader from 'react-loader';
import 'react-table/react-table.css';
import SchemaTable from './components/SchemaTable';
import Sidebar from './components/Sidebar';
import Pager from './components/Pager';

class Schema extends Component {


  render() {
    return (
            <div class="container-fluid h-100">
              <div class="row h-100">
                <Sidebar className="col-12 col-md-2 p-0" />
                <main className="col bg-faded py-3">
        <h1>Edit Schema</h1>
        <p className="lead">Edit the schema for your package..</p>
        <FileConsumer>
          {({ file, data, errors, step, metadata, updateMetadata, tableSchema, updateTableSchemaType, updateTableSchemaFormat, updateTableSchemaDesc, updateDataFromCell }) => (
            <div>
                {step !== "schema" && (
									<Redirect to="/" />
								)}
                {file && data && metadata ? (
                  <div>
										<input id="title" onChange={updateMetadata}  value={metadata.title} type="text" />
										<p>
                    </p>
										 <SchemaTable
                      tableSchema={tableSchema}
                      updateTableSchemaFormat={updateTableSchemaFormat}
                      updateTableSchemaType={updateTableSchemaType}
                      updateTableSchemaDesc={updateTableSchemaDesc}
                      updateDataFromCell={updateDataFromCell}
											data={data.data}
											errors={errors}
											defaultPageSize={5}
											columns={data.cols} />
									</div>
                ) : (
                  <Loader />
                )}
            </div>
          )}
        </FileConsumer>        			<Pager />

                </main>
              </div>
            </div>
    );
  }
}

export default Schema;

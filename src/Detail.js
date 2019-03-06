import React, { Component } from 'react';
import { FileConsumer } from './context/FileContext';
import { Redirect } from 'react-router'
import dataset from './schemas/simple/dataset.json';
import uiSchema from './schemas/simple/UISchema.json';
import Form from "react-jsonschema-form";
import Sidebar from './components/Sidebar';
import Pager from './components/Pager';

const log = (type) => console.log.bind(console, type);

class Publish extends Component {

  render() {

    return (
      <div class="container-fluid h-100">
        <div class="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">

        <h1>Detail</h1>
        <p className="lead">Time to add metadata.</p>
        <FileConsumer>
          {({ file, updateMetadata, metadata }) => (
            <div>
                {file ? (
                  <div>
										<Form schema={dataset}
											formData={metadata}
											uiSchema={uiSchema.dataset}
											onChange={updateMetadata}
											onSubmit={log("submitted")}
											onError={log("errors")}>
											<br/>
										</Form>
									</div>
                ) : (
                  <Redirect to="/"/>
                )}
            </div>
          )}
        </FileConsumer>	<Pager />

                </main>
              </div>
            </div>
    );
  }
}

export default Publish;

import React, { Component } from 'react';
import { Redirect } from 'react-router'
import dataset from './schemas/simple/dataset.json';
import uiSchema from './schemas/simple/UISchema.json';
import Form from "react-jsonschema-form";
import Sidebar from './components/Sidebar';
import Pager from './components/Pager';

const log = (type) => console.log.bind(console, type);

class EditDataset extends Component {

  render() {
    const metadata = {
      title: "madison polling",
      description: "lorem ipsum go eagles"
    }

    return (
      <div class="container-fluid h-100">
        <div class="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">

        <h1>Detail</h1>
        <p className="lead">Time to add metadata.</p>

            <div>
                  <div>
										<Form schema={dataset}
											formData={metadata}
											uiSchema={uiSchema.dataset}
											onSubmit={log("submitted")}
											onError={log("errors")}>
											<br/>
										</Form>
									</div>

            </div>

                </main>
              </div>
            </div>
    );
  }
}

export default EditDataset;

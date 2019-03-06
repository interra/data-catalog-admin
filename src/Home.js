import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {

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
                        <h1 className="card-title pricing-card-title">413,023</h1>
                        <button type="button" className="btn btn-lg btn-block btn-primary">view details</button>
                      </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Comments</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">415</h1>
                        <button type="button" className="btn btn-lg btn-block btn-primary">manage comments</button>
                      </div>
                    </div>
                  </div>

          </main>
        </div>
      </div>
    );
  }
}

export default Home;

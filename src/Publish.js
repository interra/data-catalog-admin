import React, { Component } from 'react';
import { FileConsumer } from './context/FileContext';
import { Redirect } from 'react-router'
import Confetti from 'react-dom-confetti';
import Sidebar from './components/Sidebar';
import Pager from './components/Pager';
import Loader from 'react-loader';

const slowClick = (setLoading) => () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 1000);
};
const config = {
  angle: 90,
  spread: 100,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  delay: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};
class Publish extends Component {

 state = {
    isLoading: false
  }

  setLoading(value) {
    this.setState({ isLoading: value });
  }


  render() {
    return (
            <div class="container-fluid h-100">
              <div class="row h-100">
                <Sidebar className="col-12 col-md-2 p-0" />
                <main className="col bg-faded py-3">

        <h1>Publish</h1>
        <p className="lead">This is the publish page.</p>
        <FileConsumer>
          {({ file, metadata }) => (
            <div>
                {file ? (
                  <>
                    <p>Ready to publish: <h3>{metadata.title}</h3><p>{file.name}</p></p>
                    <button
                      id="publish"
                      className="button button-primary loading-button"
                      onClick={ slowClick(this.setLoading.bind(this)) }
                    >
                      <Confetti
                        className="loading-button__confetti"
                        active={ !this.state.isLoading }
                        config={ config }
                      />

                      { this.state.isLoading ? 'Publishing...' : 'Publish' }
                    </button>
                  </>
                ) : (
                  <Redirect to="/"/>
                )}
            </div>
          )}
        </FileConsumer>        			<Pager />

                </main>
              </div>
            </div>    );
  }
}

export default Publish;

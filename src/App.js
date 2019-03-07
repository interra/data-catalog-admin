import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'


import Header from './components/Header';

import Home from './Home'
import Add from './Add'
import Preview from './Preview'
import Schema from './Schema'
import Detail from './Detail'
import Publish from './Publish'
import Datasets from './Datasets'
import EditDataset from './EditDataset'

import Groups from './Groups'

import { FileProvider } from './context/FileContext';
import { DatasetProvider } from './context/DatasetContext';
import { GroupProvider } from './context/GroupContext';

library.add(faIgloo);

class App extends Component {
  render() {
    const home =   <Home />
    const preview = <Preview />
    const schema =   <Schema />
    const detail =   <Detail />
    const publish =   <Publish />
    const datasets = <Datasets />
    const groups = <Groups />

    const add = <Add />
    return (
      <div>
        <div className='App'>
          <Router basename={process.env.PUBLIC_URL}>
            <FileProvider>
              <DatasetProvider>
              <GroupProvider>

              <Header />
                <Route exact={true} path='/' render={()=>(home)} />
                <Route exact={true} path='/datasets' render={()=>(datasets)} />
                <Route exact={true} path='/dataset/:id' render={({match})=>(<EditDataset id={match.params.id}/>)}/>

                <Route exact={true} path='/groups' render={()=>(groups)} />

                <Route exact={true} path='/add' render={()=>(add)} />

                <Route exact={true} path='/add/preview' render={()=>(preview)} />
                <Route exact={true} path='/add/schema' render={()=>(schema)} />
                <Route exact={true} path='/add/detail' render={()=>(detail)} />
                <Route exact={true} path='/add/publish' render={()=>(publish)} />
              </GroupProvider>

              </DatasetProvider>
            </FileProvider>

          </Router>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import Theme from './theme/default'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './theme/globalStyles';

import Header from './components/Header';

import Home from './Home'
import Add from './Add'
import Preview from './Preview'
import Schema from './Schema'
import Detail from './Detail'
import Publish from './Publish'
import Datasets from './Datasets'
import Comments from './Comments'
import Harvests from './Harvests'
import EditDataset from './EditDataset'
import AddHarvest from './AddHarvest'

import Groups from './Groups'

import { FileProvider } from './context/FileContext';
import { HarvestProvider } from './context/HarvestContext';
import { DatasetProvider } from './context/DatasetContext';
import { CommentProvider } from './context/CommentContext';
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
    const comments = <Comments />
    const harvests = <Harvests />
    const addharvest = <AddHarvest />
    const groups = <Groups />

    const add = <Add />
    return (
      <div>
        <div className='App'>
          <GlobalStyles />
          <ThemeProvider theme={Theme}>
            <Router basename={process.env.PUBLIC_URL}>
              <FileProvider>
                <DatasetProvider>
                <Header />
                  <Route exact={true} path='/' render={()=>(home)} />
                  <Route exact={true} path='/datasets' render={()=>(datasets)} />
                  <Route exact={true} path='/dataset/:id' render={({match})=>(<EditDataset id={match.params.id}/>)}/>
                  <GroupProvider>
                    <Route exact={true} path='/groups' render={()=>(groups)} />
                  </GroupProvider>
                  <CommentProvider>
                    <Route exact={true} path='/comments' render={()=>(comments)} />
                  </CommentProvider>
                  <HarvestProvider>
                    <Route exact={true} path='/harvests' render={()=>(harvests)} />
                  </HarvestProvider>
                  <Route exact={true} path='/add-harvest' render={()=>(addharvest)} />
                  <Route exact={true} path='/add' render={()=>(add)} />
                  <Route exact={true} path='/add/preview' render={()=>(preview)} />
                  <Route exact={true} path='/add/schema' render={()=>(schema)} />
                  <Route exact={true} path='/add/detail' render={()=>(detail)} />
                  <Route exact={true} path='/add/publish' render={()=>(publish)} />
                </DatasetProvider>
              </FileProvider>
            </Router>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;

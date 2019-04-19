import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import slug from 'slug';
import {SearchList} from 'interra-data-catalog-components';
import Loader from 'react-loader';
import backend from './services/backend';

class AddHarvest extends Component {

 constructor(props) {
    super(props);
    this.state = {
      name: '',
      identifier: '',
      identifierEdited: false,
      uri: 'http://demo.getdkan.com/data.json',
      type: '',
      filter: [
      ],
      filterValue: '',
      filterKey: '',
      datasets: [],
      datasetsLoading: false,
      migrate: false
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeURI = this.handleChangeURI.bind(this);
    this.handleFilterValue = this.handleFilterValue.bind(this);
    this.handleFilterKey = this.handleFilterKey.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  async fetchData(uri) {
    this.setState({
      datasetsLoading: true
    });
    
    const { data } = await backend.get(uri);
    const item = Object.assign(data);
    const datasets = item.dataset;
    this.setState({
      datasetsLoading: false,
      datasets 
    });
  }

  handleChangeName(event) {
    const name = event.target.value;
    let identifier = this.state.identifier;
    if (!this.state.identifierEdited) {
      identifier = slug(name, {lower:true});
    }
    this.setState({name, identifier});
  }


  handleFilterKey(event) {
    const filterKey = event.target.value;
    this.setState({filterKey});
  }

  handleFilterValue(event) {
    const filterValue = event.target.value;
    this.setState({filterValue});
  }

  handleChangeId(event) {
    const identifier = event.target.value;
    const identifierEdited = true;
    this.setState({identifierEdited, identifier});
  }

  handleChangeURI(event) {
    const uri = event.target.value;
    this.setState({uri});
  }

  handlePreview(event) {
    event.preventDefault();
    this.fetchData(this.state.uri);
  }

  render() {
    const {name, datasetsLoading, datasets, identifier, uri, filterKey, filterValue} = this.state;

    const DatasetsPreview = (() => {
      if (datasetsLoading) {
        return (<Loader loaded={false}></Loader>);
      }
      else if (datasets.length){
        let filtered = Array.from(datasets);
        if (filterKey && filterValue) {
          filtered = filtered.filter((item) => {
            if (filterKey in item) {
              if (item[filterKey] === filterValue) {
                return true;
              }
              else if (item[filterKey].includes(filterValue)) {
                return true;
              }
              return false;
            }
          }, []);
        }
        let items=[]
        if (filtered.length) {
          items = filtered.map((item) => {
            const format = item.distribution.map((dist) => {
              return {
                format: dist.format 
              }
            });
            const dataset = {
              title: item.title,
              ref: item.identifier,
              description: item.description,
              theme: item.theme,
              publisher: item.publisher.name,
              format,
              modified: item.modified
            }
            return dataset;
          });
        }
        return (<SearchList items={items} />);
      }
      else {
        return (<div></div>);
      }

    });

    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar className="col-12 col-md-2 p-0" />
          <main className="col bg-faded py-3">
            <h1>Add Harvest</h1>
            <p className="lead">Add Harvest source and set periodicity.</p>

            <div className="form-group">
              <label htmlFor="inputName1">Name</label>
              <input value={name} onChange={this.handleChangeName}  type="name" className="form-control" id="inputName1" aria-describedby="nameHelp" placeholder="Enter name" />
              <small id="nameHelp" className="form-text text-muted">Add a descriptive name for the harvest.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputIdentifier1">Identifier</label>
              <input value={identifier} onChange={this.handleChangeId}  type="text" className="form-control" id="inputIdentifier1" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="inputURI1">URI</label>
              <input value={uri} onChange={this.handleChangeURI}  type="text" className="form-control" id="inputURI1" placeholder="https://example.com/data.json" />
            </div>
            <div className="form-group">
              <div className="card card-default">
                <div className="card-body">
                  <h3>Settings</h3>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="inputMigrate1" />
                    <label className="form-check-label" htmlFor="inputMigrate1">Migrate</label>
                    <small id="migrateHelp" className="form-text text-muted">Select whether resources should be stored locally.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="card card-default">
                <div className="card-body">
                  <h3>Filters</h3>
                  <div className="form-group">
                    <h4>Filter</h4>
                    <div className="row">
                      <div className="col">
                        <input type="text" value={filterKey} onChange={this.handleFilterKey} className="form-control" placeholder="Key" />
                      </div>
                      <div className="col">
                        <input type="text" value={filterValue} onChange={this.handleFilterValue} className="form-control" placeholder="Value" />
                      </div>
                    </div>
                    <small id="migrateHelp" className="form-text text-muted">Select whether resources should be stored locally.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button id="preview" className="btn btn-primary" onClick={this.handlePreview}>Preview</button>
            </div>
            <div className="dataset-preview">
              <DatasetsPreview />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AddHarvest;

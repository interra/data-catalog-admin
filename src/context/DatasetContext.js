import React from 'react'
import datasets from '../api/dataset';

const DatasetContext = React.createContext()

class DatasetProvider extends React.Component {
  state = {
    datasets: datasets
  }


  render() {
    console.log(this.state.datasets);
    return (
      <DatasetContext.Provider
        value={{
          datasets: this.state.datasets
        }}
      >
        {this.props.children}
      </DatasetContext.Provider>
    )
  }
}

const DatasetConsumer = DatasetContext.Consumer;

export { DatasetProvider, DatasetConsumer }

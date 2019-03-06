import React from 'react'
import datasets from '../api/organization';

const GroupContext = React.createContext()

class GroupProvider extends React.Component {
  state = {
    datasets: datasets
  }


  render() {
    const datasets = this.state.datasets.map((d) => {
      d.edit = "edit";
      return d;
    });
    return (
      <GroupContext.Provider
        value={{
          datasets: datasets
        }}
      >
        {this.props.children}
      </GroupContext.Provider>
    )
  }
}

const GroupConsumer = GroupContext.Consumer;

export { GroupProvider, GroupConsumer }

import React from 'react'
import harvests from '../api/harvest';

const HarvestContext = React.createContext()

class HarvestProvider extends React.Component {
  state = {
    harvests: harvests
  }

  render() {
    return (
      <HarvestContext.Provider
        value={{
          harvests: this.state.harvests
        }}
      >
        {this.props.children}
      </HarvestContext.Provider>
    )
  }
}

const HarvestConsumer = HarvestContext.Consumer;

export { HarvestProvider, HarvestConsumer }

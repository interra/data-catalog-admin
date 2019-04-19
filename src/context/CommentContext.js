import React from 'react'
import comments from '../api/comment';

const CommentContext = React.createContext()

class CommentProvider extends React.Component {
  state = {
    comments
  }

  render() {
    return (
      <CommentContext.Provider
        value={{
          comments: this.state.comments
        }}
      >
        {this.props.children}
      </CommentContext.Provider>
    )
  }
}

const CommentConsumer = CommentContext.Consumer;

export { CommentProvider, CommentConsumer }

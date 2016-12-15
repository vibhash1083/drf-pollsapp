import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import DevTools from './DevTools';
import QuesApp from './QuesApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>

          <QuesApp/>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import { Action } from 'redux';
import {fetchRootJSON, fetchSchema } from './actions';

import { AppMenu } from './AppMenu';

import { Segment, Sidebar } from 'semantic-ui-react';

import { Routes } from './Routes';

import { BrowserRouter, Route } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fetchRootJSON:  (): Action => dispatch(fetchRootJSON),
  fetchSchema:    (): Action => dispatch(fetchSchema)
});

const mapStateToProps = (state: any) => ({
  data:   state.data,
  schema: state.schema
});

const connector = connect(mapStateToProps, mapDispatchToProps );

interface IProps {
  data: any;
  schema: any;
  fetchRootJSON(): Action;
  fetchSchema(): Action;
}

class AppComponent extends React.Component<IProps, {}> {
  componentWillMount() {
    this.props.fetchRootJSON();
    this.props.fetchSchema();
  }

  renderMenu = (routeParams: any) => <AppMenu routeParams={routeParams} />;

  renderAppLoaded() {
    if (this.props.data && this.props.data.software && this.props.schema && this.props.schema.software) {
      return (
        <BrowserRouter>
          <Sidebar.Pushable as={Segment}>
            <Route component={this.renderMenu} />
            <Sidebar.Pusher>
              <Segment basic={true}>
                <Routes />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </BrowserRouter>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="App">
        {this.renderAppLoaded()}
      </div>
    );
  }
}

export const App = connector(AppComponent);

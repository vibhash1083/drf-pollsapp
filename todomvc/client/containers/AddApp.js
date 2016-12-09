import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as AdActions from '../actions/AdActions';

class AdApp extends Component {

  componentDidMount() {
    this.props.actions.getAds();
  }

  render() {
    const { ads, actions } = this.props;

    return (
      <div>
        <Header addAdvert={actions.addAdvert} />
        <MainSection ads={ads} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    ads: state.ads
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(AdActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(AdApp);

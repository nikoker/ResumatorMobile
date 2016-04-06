/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
} from 'react-native';

import EmployeeList from './EmployeeList';
// import Router from 'react-native-router';
// var Router = require('react-native-router');

var firstRoute = {
  name: 'Welcome!',
  component: EmployeeList
};

class ResumatorMobile extends Component {

  render() {
    return (
      <EmployeeList />
    );
  }

}

AppRegistry.registerComponent('ResumatorMobile', () => ResumatorMobile);

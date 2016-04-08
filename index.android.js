/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
} from 'react-native';

import EmployeeList from './EmployeeList';
import { Toolbar } from 'react-native-material-design';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 8,
  },
});

// var ROUTES = {
//   employees_list: Navigation,
// };

class ResumatorMobile extends Component {

  renderScene(route, navigator) {
    const routeId = route.id;
    if (routeId === 'EmployeeList') {
      return (
        <EmployeeList
          navigator={navigator}
        />
      );
    }
  }

  renderToolBar() {
    return (<Toolbar />);
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'EmployeeList', name: 'Employee list' }}
        renderScene={this.renderScene.bind(this)}
        navigationBar={this.renderToolBar()}
      />
    );
  }

}

AppRegistry.registerComponent('ResumatorMobile', () => ResumatorMobile);

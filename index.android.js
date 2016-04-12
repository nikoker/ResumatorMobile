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

import EmployeesList from './EmployeesList';
import DetailsView from './DetailsView';
import { Toolbar } from 'react-native-material-design';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ResumatorMobile extends Component {

  renderScene(route, navigator) {
    // if (route.name === 'EmployeesList') {
    //   return (
    //     <EmployeesList
    //       navigator={navigator}
    //     />
    //   );
    // }
    // if (route.name === 'DetailsView') {
    //   return (
    //     <DetailsView
    //       navigator={navigator}
    //     />
    //   );
    // }
    console.log('This is '.concat(route.component));
    return (
      <route.component
        navigator={navigator} {...route.passProps}
      />
    );
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ component: EmployeesList }}
        renderScene={this.renderScene}
      />
    );
  }

}

AppRegistry.registerComponent('ResumatorMobile', () => ResumatorMobile);

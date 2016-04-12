/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

import EmployeesList from './EmployeesList';
import DetailsView from './DetailsView';
import { Toolbar } from 'react-native-material-design';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-start',
  },
  nav: {
    height: 60,
    backgroundColor: '#2196f3',
  },
  leftNavButtonText: {
    fontSize: 18,
    marginRight: 13,
    marginTop: 2,
  },
});

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop(); } } }
        >
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>);
    } else {
      return null;
    }
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>Employees</Text>;
  },
};

class ResumatorMobile extends Component {

  renderScene(route, navigator) {
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
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.nav }
            routeMapper={ NavigationBarRouteMapper }
          />
        }
      />
    );
  }

}

AppRegistry.registerComponent('ResumatorMobile', () => ResumatorMobile);

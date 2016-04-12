import React, {
  Component,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


const REQUEST_URL = 'https://rawgit.com/RamonGebben/b95069c3088a35f5642530f20ecbbdcc/raw/4c2947d34dd2a282a125cf19e57478a4932feda7/resumatorData.json';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 80,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    paddingBottom: 8,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  subtitle: {
    textAlign: 'left',
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 16,
  },

});

import DetailsView from './DetailsView';

class EmployeesList extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      dataSource: new ListView.DataSource(
        {
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      loaded: false,
    };
  }

  componentWillMount() {
    console.log('blah blah');
    const navigator = this.props.navigator;
  }

  componentDidMount() {
    this.fetchData();
  }

  navigate(name) {
    console.log('navigate');
    // this.props.navigator.push({
    //   name: 'DetailsView',
    // });
    this.props.navigator.push({
      component: DetailsView,
      passProps: {
        name: name,
      },
    });
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState(
          {
            dataSource: this.state.dataSource.cloneWithRows(responseData._embedded.employees),
            loaded: true,
          });
      })
      .done();
  }

  renderEmployee(employee) {
    console.log('renderEmployee');
    return (
      <TouchableHighlight onPress={ this.navigate.bind(this) }>
        <View style={styles.container}>
          <Image
            source={{ uri: 'http://loremflickr.com/60/60' }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{employee.fullName}</Text>
            <Text style={styles.subtitle}>{employee.role}</Text>
          </View>

        </View>
      </TouchableHighlight>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading employees...
        </Text>
      </View>);
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderEmployee.bind(this)}
        style={styles.listView}
      />
    );
  }
}

export default EmployeesList;

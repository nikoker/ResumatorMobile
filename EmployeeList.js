import React, {
  Component,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const REQUEST_URL = 'https://rawgit.com/RamonGebben/b95069c3088a35f5642530f20ecbbdcc/raw/4c2947d34dd2a282a125cf19e57478a4932feda7/resumatorData.json';

const styles = StyleSheet.create({
  listView: {
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

class EmployeeList extends Component {

  constructor(props) {
    super(props);
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

  renderLoadingView() {
    return (
     <View style={styles.container}>
      <Text>
        Loading employees...
      </Text>
     </View>);
  }

  renderEmployee(employee) {
    return (
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
    );
  }

  render() {
    console.log('ja hoor employee');
    // if (!this.state.loaded) {
    //   console.log('Now?');
    //   return this.renderLoadingView();
    // }

    return (
      // <ListView
      //   dataSource={this.state.dataSource}
      //   renderRow={this.renderEmployee}
      //   style={styles.listView}
      // />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>'Ja hoor'</Text>
      </View>
    );
  }
}

export default EmployeeList;

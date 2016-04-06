import React, {
  Component,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

// const MOCKED_EMPLOYEE_DATA = [
//   {name: 'Nikos', role: 'Sucker', image:{thumbnail: 'http://loremflickr.com/60/60'} },
//   {name: 'Ramon', role: 'Writer of bugs', image:{thumbnail: 'http://loremflickr.com/60/60'} },
// ];
const REQUEST_URL= 'https://rawgit.com/RamonGebben/b95069c3088a35f5642530f20ecbbdcc/raw/4c2947d34dd2a282a125cf19e57478a4932feda7/resumatorData.json';

class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
    };
  }

  detailPage() {
    this.props.toRoute({
      name: "A new screen",
      component: HelloPage
    });
  }


  renderLoadingView() {
     return (
       <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
       </View> );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => { this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData._embedded.employees),
      loaded: true,
     });
   })
   .done();
  }

  renderEmployee(employee) {
    return (
      <View style={styles.container}>

          <Image
            source={{uri: 'http://loremflickr.com/60/60'}}
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
    if (!this.state.loaded) {
       return this.renderLoadingView();
    }

    return (
      <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderEmployee}
       style={styles.listView} />
    );
  }
};

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

export default EmployeeList;

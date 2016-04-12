const React = require('react-native');
const {
  Component,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
});

class DetailsView extends Component {
  render() {
    console.log('DetailsView');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Nikos'}</Text>
      </View>
    );
  }

}

export default DetailsView;

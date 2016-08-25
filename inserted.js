var tree_image = 'https://breezometer.com/wordpress/wp-content/uploads/2016/01/nature_big_tree_hd.jpg';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class Inserted extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={button_styles.button}>
          <Text> {this.props.customText} </Text>
        </View>
        <View>
        <Image source={{uri: tree_image}}
     style={{width: 400, height: 400}} />
        </View>
      </TouchableOpacity>
    );
  }
}

const button_styles = StyleSheet.create({
    button: {
      backgroundColor: '#aaa',
      padding: 10,
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Inserted.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  customText: React.PropTypes.string
};

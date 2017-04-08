import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button, Picker } from 'react-native';

class Ready extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hours: "0.5",
    };
  };

  handleMoveToListPress = () => {
    this.props.navigation.navigate('QuestionTwo');
  };
  _renderTitle() {
      return (
          <View style={style.header}>
              <Text style={styles.title}>{this.state.title}</Text>
          </View>
      );
  }
  _renderTimers() {
      return (
         <View style={styles.timerWrapper}>
             <Text>00:00.95</Text>
             <Text>00:02.95</Text>
         </View>
      );
  }
  render() {
    return
  }
}

var styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingTop: 20,
  },
  picker: {
      width: 100,
  }
});

export default Ready;

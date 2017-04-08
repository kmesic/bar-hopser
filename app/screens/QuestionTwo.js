import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button } from 'react-native';
import Globals from '../config/globals';


class QuestionTwo extends Component {
  handleMoveToListPress = () => {
    Globals.q2answer = false;
    this.props.navigation.navigate('QuestionThree');
  };
  handleMoveToListPress_YES = () => {
    Globals.q2answer = true;
    this.props.navigation.navigate('QuestionThree');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#f39c12'}}>
        <View style={{flex: 1, backgroundColor:'#fff'}}></View>
        <View style={{flex: 1, backgroundColor: '#f39c12', justifyContent: 'space-between', paddingBottom: 10,}}>
            <Text style={styles.titleText}> Are you looking for a local craft beer? </Text>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}>
                    <Button
                        onPress={this.handleMoveToListPress_YES}
                        title="Yes"
                    />
                </View>
                <View style={{width: 15}}/>
                <View style={{flex: 1}}>
                    <Button
                        onPress={this.handleMoveToListPress}
                        title="No"
                    />
                </View>
            </View>
        </View>
        <View style={{flex: 1, backgroundColor:'#fff'}}></View>
      </View>
    );
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

});

export default QuestionTwo;

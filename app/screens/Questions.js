import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button } from 'react-native';


const onButtonPress = () => {
  console.log('button pressed');
};


/* TODO: Add radio buttons for selections */
class Questions extends Component {
  handleMoveToListPress = () => {
    this.props.navigation.navigate('BarsList');
    console.log('move to bars list');
  };
  render() {
    return (
      <View style={{backgroundColor: '#f39c12'}}>
        <View style={{backgroundColor: '#f39c12'}}>
          <Text style={styles.titleText}> Start and End Time? </Text>
        </View>
        <View style={{height: 20, backgroundColor:'#fff'}}></View>

        <View style={{backgroundColor: '#f39c12'}}>
          <Text style={styles.titleText}> Are you looking for a local craft beer? </Text>
        <Button
          onPress={onButtonPress}
          title="Yes"
        />
        <Button
          onPress={() => navigate('BarsList')}
          title="No, I suck"
        />


      </View>

      <View style={{height: 20, backgroundColor:'#fff'}}></View>

      <View>
        <Text style={styles.titleText}>How far u tryna party?</Text>
      </View>

      <View >
        <Button
          onPress={this.handleMoveToListPress}
          title="Move to List of Bars"
        />
      </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});

export default Questions;

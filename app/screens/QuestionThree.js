import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button, Picker } from 'react-native';

class QuestionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dist: "5",
    };
  };
  handleMoveToListPress = () => {
    this.props.navigation.navigate('BarsList');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#f39c12'}}>
        <View style={{flex: 1, backgroundColor:'#fff'}}></View>
        <View style={{flex: 1, backgroundColor: '#f39c12', }}>
          <Text style={styles.titleText}> How far are you willing to travel (miles)? </Text>
                    <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}/>
                <Picker
                    style={[styles.picker, {color: 'white'}]}
                    selectedValue={this.state.dist}
                    onValueChange={(miles) => this.setState({dist: miles})}>
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="35" value="35" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="45" value="45" />
                    <Picker.Item label="50" value="50" />
                </Picker>
                <View style={{flex: 1}}/>
            </View>
            <Button
                onPress={this.handleMoveToListPress}
                title="Next"
            />
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
  picker: {
      width: 100,
  }

});

export default QuestionThree;

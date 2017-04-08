import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button, Picker } from 'react-native';

class QuestionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hours: "0.5",
    };
  };

  handleMoveToListPress = () => {
    this.props.navigation.navigate('QuestionTwo');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#f39c12'}}>
        <View style={{flex: 1, backgroundColor:'#fff'}}></View>
        <View style={{flex: 1, backgroundColor: '#f39c12', }}>
            <Text style={styles.titleText}> Total Time to be out Bar Hopping? </Text>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}/>
                <Picker
                    style={[styles.picker, {color: 'white'}]}
                    selectedValue={this.state.hours}
                    onValueChange={(hour) => this.setState({hours: hour})}>
                    <Picker.Item label="0.5" value="0.5" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="1.5" value="1.5" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="2.5" value="2.5" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="3.5" value="3.5" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="4.5" value="4.5" />
                    <Picker.Item label="5" value="5" />
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

export default QuestionOne;

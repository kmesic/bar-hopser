import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  ListView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { List, ListItem} from 'react-native-elements';
import {bars} from '../config/bars_data';
import Globals from '../config/globals';

const styles = StyleSheet.create({
  buttonHeight: {
     marginTop: 50
  },
  titleText: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f39c12',
  },

});

class BarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  bars: bars.slice(),
                  barsSelected: []
                 }

  };
  handleMoveToMaps = () => {
    Globals.barsSearchList = this.state.barsSelected.slice();
    this.props.navigation.navigate('Ready');
  };

  onListItemPress = (type, bar, index) => {
    if (type === "add") {
      this.setState({
         barsSelected: this.state.barsSelected.concat([bar]),
         bars: this.state.bars.filter(function(elem, ind) {
           return ind !== index;
         }),
      });
    } else if (type === "delete") {
      this.setState({
         bars: this.state.bars.concat([bar]),
         barsSelected: this.state.barsSelected.filter(function(elem, ind) {
           return ind !== index;
         }),
      });
    }
  }

  render() {
    return (

      <ScrollView>
        <Text style={styles.titleText}>Select Bars to Visit</Text>
        <List>
          {this.state.barsSelected.map((bar, index) => (
            <ListItem
              key={"listBar" + bar.lat}
              title={bar.name}
              onPress={this.onListItemPress.bind(this, "delete", bar, index)}
            />
          ))}
          
          {this.state.barsSelected.length !== 0 ? 
            <Button
              onPress={this.handleMoveToMaps}
              style = {styles.buttonHeight}
              title="Done"
            />
            : null
          }
            <View style={{backgroundColor: "gray", height: 5}} />
        

          {this.state.bars.map((bar, index) => (
            <ListItem
              key={bar.lat}
              title={bar.name}
              onPress={this.onListItemPress.bind(this, "add", bar, index)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}


export default BarsList;

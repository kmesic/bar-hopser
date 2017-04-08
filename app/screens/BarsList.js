import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { List, ListItem} from 'react-native-elements';
import {bars} from '../config/bars_data';



const onButtonPress = () => {
  console.log('button pressed');
};
class BarsList extends Component {
  handleMoveToMaps = () => {
    this.props.navigation.navigate('Maps');
    console.log('moving onto maps');
  };
  render() {
    return (

      <ScrollView>
        <Button
          onPress={this.handleMoveToMaps}
          title="Move to Map"
        />
        <List>
          {bars.map((bar) => (
            <ListItem
              key={bar.lats}
              title={`${bar.name}`}
              onPress={onButtonPress}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}



export default BarsList;

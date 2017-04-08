import React from 'react';
import { StackNavigator } from 'react-navigation';
import Questions from '../screens/Questions';



export const Root = StackNavigator({
  Question: {
    screen: Questions,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

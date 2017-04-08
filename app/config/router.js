import React from 'react';
import { StackNavigator } from 'react-navigation';

import Questions from '../screens/Questions';
import BarsList from '../screens/BarsList';
import Maps from '../screens/Maps';




export const QuestionsStack = StackNavigator({
  Settings: {
    screen: Questions,
    navigationOptions: {
      title: 'Settings',
    },
  },
});
export const Root = StackNavigator({
  Question: {
    screen: Questions,
  },
  BarsList: {
    screen: BarsList,
  },
  Maps: {
    screen: Maps,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

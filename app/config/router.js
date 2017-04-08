import React from 'react';
import { StackNavigator } from 'react-navigation';

import Questions from '../screens/Questions';
import QuestionOne from '../screens/QuestionOne';
import QuestionTwo from '../screens/QuestionTwo';
import QuestionThree from '../screens/QuestionThree';
import BarsList from '../screens/BarsList';
import Maps from '../screens/Maps';
import Ready from '../screens/Ready';





export const QuestionsStack = StackNavigator({
  Settings: {
    screen: QuestionOne,
    navigationOptions: {
      title: 'Settings',
    },
  },
});
export const Root = StackNavigator({
  QuestionOne: {
    screen: QuestionOne,
  },
  QuestionTwo: {
    screen: QuestionTwo,
  },
  QuestionThree: {
    screen: QuestionThree,
  },
  BarsList: {
    screen: BarsList,
  },
  Ready: {
    screen: Ready
  },
  Maps: {
    screen: Maps,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

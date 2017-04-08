import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Button, Picker } from 'react-native';

class Ready extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "Current Bar",
        buttonText: "Start",
        mainTimer: 0,
        hours: 1,
        minutes: 30,
        seconds: 30,
    };
  };

  handleMoveToListPress = () => {
    this.props.navigation.navigate('QuestionTwo');
  };
  _renderTitle() {
      return (
          <View style={styles.header}>
              <Text style={styles.title}>{this.state.title}</Text>
          </View>
      );
  }
  _renderTimers() {
      return (
         <View style={styles.timerWrapper}>
             <Text style={styles.mainTimer}>{this.state.mainTimer}</Text>
         </View>
      );
  }

   countdown(minutes, seconds) {
    var endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer(react)
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            react.setState({
                mainTimer: "00:00.00",
                buttonText: "Done"
            });
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            react.setState({
                mainTimer: (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() ),
                buttonText: "Next"
            });
            setTimeout( updateTimer.bind(this, react), time.getUTCMilliseconds() + 500 );
        }
    };

    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer(this);
}

  handleNext() {
      this.countdown(120, 0);
  }

  _renderButtons() {
      return (
        <Button
          onPress={this.handleNext.bind(this)}
          title={this.state.buttonText}
        />
      );
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                {this._renderTitle()}
                {this._renderTimers()}
            </View>
            <View style={styles.bottom}>
                {this._renderButtons()}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      borderBottomWidth: 0.5,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#F9F9F9',
  },
  title: {
      alignSelf: 'center',
      fontWeight: '600'
  },
  timerWrapper: {
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      flex: 1
  },
  top: {
      flex: 1,
  },
  bottom: {
      flex:2,
      backgroundColor: '#F0EFF5'
  },
  mainTimer: {
      fontSize: 60,
      fontWeight: '100',
      borderWidth: 0.5,
      alignSelf: 'center'
  },
});

export default Ready;

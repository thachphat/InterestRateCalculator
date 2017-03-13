import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      depositValue: 100,
      interest: 7.5,
      period: 12,
      depositMonths: 12,
      result: 0
    }
  }

  calculateResult() {
    let interestPerPeriod = this.state.interest / 12 * this.state.period
    let result = this.state.depositValue * Math.pow(1 + interestPerPeriod / 100, this.state.depositMonths / this.state.period)
    return isNaN(result) ? this.state.depositValue : result
  }

  render() {
    return(
      <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
        <View style={styles.container}>
          <Text style={styles.title}>Số tiền gửi:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='decimal-pad'
            value={this.state.depositValue.toString()}
            onChangeText={ (depositValue) => this.setState({depositValue})}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Lãi suất:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='decimal-pad'
            value={this.state.interest.toString()}
            onChangeText={ (interest) => this.setState({interest})}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Chu kỳ:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='number-pad'
            value={this.state.period.toString()}
            onChangeText={ (period) => this.setState({period})}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Số tháng gửi</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='number-pad'
            value={this.state.depositMonths.toString()}
            onChangeText={ (depositMonths) => this.setState({depositMonths})}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.title,{fontSize: 20}]}>Số tiền rút: {this.calculateResult()}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 3
  },
  container: {
    flexDirection: 'row',
    paddingTop: 10
  }
});

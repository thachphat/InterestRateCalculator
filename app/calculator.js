import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native';

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      depositValue: 100,
      interest: 7.5,
      period: 12,
      depositMonths: 12,
      result: 0,
      realInterest: 0
    }
  }

  componentDidMount() {
    this.calculateResult()
  }

  calculateResult() {
    let result = this.state.result
    if (this.state.depositMonths % this.state.period != 0) {
      Alert.alert('Chu kỳ và số tháng gửi đã nhập không hợp lệ (không chia hết cho nhau)')
    } else {
      let interestPerPeriod = this.state.interest / 12 * this.state.period
      result = this.state.depositValue * Math.pow(1 + interestPerPeriod / 100, this.state.depositMonths / this.state.period)
    }
    this.setState({
      result: result,
      realInterest: (result - this.state.depositValue) / this.state.depositValue * 100
    })
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
            onChangeText={ (depositValue) => this.setState({depositValue}, function(){
              this.calculateResult()
            }.bind(this) )}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Lãi suất:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='decimal-pad'
            value={this.state.interest.toString()}
            onChangeText={ (interest) => this.setState({interest}, function() {
              this.calculateResult()
            }.bind(this))}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Chu kỳ:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='number-pad'
            value={this.state.period.toString()}
            onChangeText={ (period) => this.setState({period}, function(){
              this.calculateResult()
            }.bind(this))}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Số tháng gửi:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='number-pad'
            value={this.state.depositMonths.toString()}
            onChangeText={ (depositMonths) => this.setState({depositMonths}, function(){
              this.calculateResult()
            }.bind(this) )}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.title,{fontSize: 20}]}>Số tiền rút: {this.state.result}</Text>
        </View>
        <View style={[styles.container, {paddingTop: 15}]}>
          <Text style={[styles.title,{fontSize: 20}]}>Lãi suất thực: {this.state.realInterest}%</Text>
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

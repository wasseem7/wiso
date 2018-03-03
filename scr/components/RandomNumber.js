import React from 'react';

import PropTypes from 'prop-types';

import { Text, TouchableOpacity, StyleSheet, } from 'react-native';



class RandomNumber extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    if(this.props.isDisabled) {return; }
    this.props.onPress(this.props.id);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  random: {
    backgroundColor: '#99c2ff',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    color: '#000000',
  },

  disabled: {
    opacity: 0.6,
  },
});

export default RandomNumber;

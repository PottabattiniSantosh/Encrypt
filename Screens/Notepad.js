import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NotePad extends Component {
    render() {
        return (
            <>
          <View style={styles.Home}>
            <Text>NotePad</Text>
          </View>
          </>
        );
      }
  }
  const styles = StyleSheet.create({
      Home:{ flex: 1, justifyContent: "center", alignItems: "center" }
  })
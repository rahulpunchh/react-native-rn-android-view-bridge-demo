/* @flow */
"use strict";

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import FullScreenScene from "./FullScreenScene";

export default class FullScreenComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            FullScreenScene.show("FullScreenScene", FullScreenScene.SHORT);
          }}
        >
          <Text>
            Hello, World I am React Native Full Screen Text View For no Reason ....
          </Text>
        </TouchableHighlight>

        <Text>
          Hello, World
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "red"
  }
});

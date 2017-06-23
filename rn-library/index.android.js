"use strict";

import React from "react";
import ToastAndroid from "./MYRNModule";
import FullScreenComponent from "./FullScreen";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

class MyAwesomeApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            ToastAndroid.show("Awesome", ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.hello}>
            Hello, World I am React Native Text View For no Reason ....
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hello: {
    fontSize: 14,
    textAlign: "center"
  }
});

AppRegistry.registerComponent("MyAwesomeApp", () => MyAwesomeApp);
AppRegistry.registerComponent("FullScreenComponent", () => FullScreenComponent);

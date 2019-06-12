import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB, Appbar, Text } from "react-native-paper";

export default class ProviderServices extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          {/* <Appbar.BackAction onPress={this._goBack} /> */}
          <Appbar.Content title="Services" subtitle="" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    padding: 10,
    backgroundColor: "#ffffff",
    position: "absolute",
    justifyContent: "center",
    width: "100%"
  },
  inputField: {
    backgroundColor: "white"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

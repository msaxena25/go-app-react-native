import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB, Appbar, Text } from "react-native-paper";
import Colors from "../../shared/constants/Colors";

export default class ProviderServices extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          {/* <Appbar.BackAction onPress={this._goBack} /> */}
          <Appbar.Content title="Services" subtitle="" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>

        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.tabBar,
  },
  container: {
    marginTop: "20%",
    padding: 10,
    backgroundColor: 'white',
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

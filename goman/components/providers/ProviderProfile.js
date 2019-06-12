import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB, Appbar, Text } from "react-native-paper";

export default class ProviderProfile extends React.Component {
  state = {
    text: ""
  };

  _goBack = () => console.log("Went back");

  _onSearch = () => console.log("Searching");

  _onMore = () => console.log("Shown more");

  render() {
    return (
      <View>
        <Appbar.Header>
          {/* <Appbar.BackAction onPress={this._goBack} /> */}
          <Appbar.Content title="My Profile" subtitle="" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>

        <View style={styles.container}>
          <Text>Register</Text>
          <TextInput
            style={styles.inputField}
            label="Name"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={styles.inputField}
            label="Mobile No."
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={styles.inputField}
            label="City"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={styles.inputField}
            label="State"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={styles.inputField}
            label="Country"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {},
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

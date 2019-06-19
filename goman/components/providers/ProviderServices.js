import * as React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { TextInput, FAB, Appbar, Text } from "react-native-paper";
import Colors from "../../shared/constants/Colors";

export default class ProviderServices extends React.Component {
  onAdd() {}
  state = { service: "" };
  servicesArr = [
    { service: "AC Repair", amount: 300, id: 1 },
    { service: "Cooler Repair", amount: 250, id: 2 }
  ];
  updateUser = user => {
    this.setState({ service: user });
  };
  render() {
    let picker = (
      <Picker
        selectedValue={this.state.service}
        onValueChange={this.updateUser}
      >
        {this.servicesArr.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.service} value={item.id} />
          );
        })}
      </Picker>
    );
    return (
      <View style={styles.parent}>
        <Appbar.Header style={styles.header}>
          {/* <Appbar.BackAction onPress={this._goBack} /> */}
          <Appbar.Content title="Services" subtitle="" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
        <View style={styles.serviceSection}>
          <View>{picker}</View>
          <View>
            <TextInput style={styles.inputField} label="Name" />
          </View>
        </View>
        <FAB style={styles.fab} icon="add" onPress={() => this.onAdd()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.tabBar
  },
  serviceSection: {
    padding: 10
  },
  container: {
    marginTop: "20%",
    padding: 10,
    backgroundColor: "white",
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

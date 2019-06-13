import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

export default class DialogClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  // _hideDialog = () => this.setState({ visible: false });

  _hideDialog = () => {
    this.props.show = false;
    console.log("test");
  };
  componentWillMount() {}
  componentDidMount() {}

  _showDialog = function() {
    this.setState({ visible: true });
  };

/*   componentDidUpdate(prevProps) {
    console.log(this.props.show, prevProps.show);
  }
 */
  render() {
    return (
      <View>
        <Portal>
          <Dialog visible={this.props.show} onDismiss={this._hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.props.message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

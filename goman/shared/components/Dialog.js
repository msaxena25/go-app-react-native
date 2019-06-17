import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';

export default class DialogClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible ? this.props.visible : false,
      message: ""
    };
  }

  // _hideDialog = () => this.setState({ visible: false });

  _hideDialog = () => {
    this.setState({ visible: false });
  };

  componentWillMount() {}
  componentDidMount() {}

  componentWillReceiveProps(newProps) {
   // console.log(newProps);
    const oldProps = this.props;
    if (oldProps.visible !== newProps.visible) {
      this.setState({ visible: true });
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.show, prevProps.show);
  }

  render() {
    return (
      <View>
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
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

DialogClass.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string
};

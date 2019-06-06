import React from "react";
import Toast from "react-native-easy-toast";
import { Button, TextInput, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class Register extends React.Component {
  state = {
    mail: "",
    password: ""
  };

  register = async () => {};

  render() {
    const { password, mail } = this.state;
    return (
      <>
        <Toast ref="toast" position="top" />
        <Title>Inscription</Title>
        <TextInput
          label="Email"
          value={mail}
          onChangeText={mail => this.setState({ mail })}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => this.setState({ password })}
          mode="outlined"
          secureTextEntry={true}
          style={styles.input}
        />
        <Button onPress={this.register}>Inscription</Button>
        <Button onPress={this.props.switchScreen}>Connexion</Button>
      </>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8
  },
  button: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32
  }
});

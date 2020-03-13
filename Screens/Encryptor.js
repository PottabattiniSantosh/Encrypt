import React, { Component } from 'react';
import { Text, StyleSheet, View, Clipboard } from 'react-native';
import {Container, Content, Textarea, Form, Item, Input, Label, Button } from "native-base";
import { encrypt } from 'react-native-simple-encryption';

export default class Encryptor extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: '',
      Key: '',
      encryptedMessage: ''
    };
  }

  onPressEncryptButton = () => {
    var data=encrypt(this.state.message, this.state.Key);
    this.setState(
      { encryptedMessage: data }
    );
  }

  onPressCopyButton = ()=>{
    Clipboard.setString(this.state.encryptedMessage);
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Message" onChange={(event)=> {this.setState({message: event.nativeEvent.text})}} />
            <Item fixedLabel>
              <Label>Key</Label>
              <Input bordered onChange={(event)=> {this.setState({Key: event.nativeEvent.text})}} />
              <Button light style={styles.ButtonStyle} onPress={this.onPressEncryptButton}><Text> Encrypt </Text></Button>
            </Item>
            <Textarea disabled rowSpan={5} bordered placeholder="Encrypted message" value={this.state.encryptedMessage} />
            <View style={styles.PositionCopy}>
              <Button block light style={styles.CopyButton} onPress={this.onPressCopyButton}><Text> copy </Text></Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Home: { flex: 1, justifyContent: "center", alignItems: "center" },
  ButtonStyle: { width: "20%", alignItems: "center" },
  CopyButton:{width: "15%", alignItems:"center"},
  PositionCopy:{
    flexDirection:"column",
    alignItems:"stretch"
  }
})
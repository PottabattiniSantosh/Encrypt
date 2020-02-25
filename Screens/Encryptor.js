import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Header, Container, Content, Textarea, Form, Item, Input, Label, Button } from "native-base";

export default class Encryptor extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: '',
      Key: '',
      encryptedMessage: ''
    };
  }

  onPressButton = () => {
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
              <Button light style={styles.ButtonStyle} onPress={this.onPressButton}><Text> Encrypt </Text></Button>
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Encrypted message" value={this.state.encryptedMessage} />
            {/* <View style={styles.PositionCopy}>
              <Button block light style={styles.CopyButton}><Text> copy </Text></Button>
            </View> */}
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
    justifyContent:"flex-end"
  }
})
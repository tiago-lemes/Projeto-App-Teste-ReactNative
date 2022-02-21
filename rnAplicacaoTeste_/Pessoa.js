import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class Pessoa extends Component {
  state = { idade: 34 };

  render() {
    return (
      <>
        <View>
          <Text>
            {"\n\n\n"}Olá, aqui é o {this.props.nome}, tenho {this.state.idade} ano
            {this.state.idade === 1 ? "" : "s"}
          </Text>
          <Button
            onPress={() => {
              this.setState({ idade: this.state.idade + 1 });
            }}
            disabled={this.state.idade === 100}
            title={this.state.idade === 100 ? "Valor máximo!!!" : "Aumentar idade"}
          />
          <Button
            onPress={() => {
              this.setState({ idade: this.state.idade - 1 });
            }}
            disabled={this.state.idade === 0}
            title={this.state.idade === 0 ? "Valor mínimo!!!" : "Diminuir idade"}
          />
        </View>
      </>
    );
  }
}

export default Pessoa;

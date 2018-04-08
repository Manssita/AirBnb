import React from "react";
import axios from "axios";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar
} from "react-native";

import { styles } from "../Log/styles";

export default class Log extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    email: "arno@airbnb-api.com",
    password: "password01",
    // email: "Please enter your email",
    // password: "password",
    disable: false
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={[styles.container, styles.style]}>
        <StatusBar barStyle="light-content" />
        <View style={[styles.home, styles.align]}>
          <Image
            style={styles.homeVisual}
            source={{
              uri: "https://www.southjerseygas.com/SJG/media/img/icon-house.png"
            }}
          />
        </View>
        <View style={[styles.home, styles.align]}>
          <Text style={[styles.white, styles.title]}>Welcome</Text>
        </View>
        <View style={[styles.form, styles.align]}>
          <TextInput
            underlineColorAndroid={"transparent"}
            style={styles.input}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            secureTextEntry
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity
            disabled={this.state.disable}
            style={styles.login}
            onPress={() => {
              axios
                .post("https://airbnb-api.now.sh/api/user/log_in", {
                  email: this.state.email,
                  password: this.state.password
                })
                .then(function(response) {
                  navigate("Home", { title: "MonAirbnb" });
                })
                .catch(function(error) {
                  console.log(error);
                  alert("Veuillez entrer un email et/ou mot de passe valide");
                });
            }}
          >
            <View style={styles.align}>
              <Text style={[styles.loginIn]}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

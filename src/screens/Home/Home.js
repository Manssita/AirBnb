import React from "react";
import { Button, View, Text, ScrollView, Image } from "react-native";
import axios from "axios";
import { styles } from "../Home/styles";

const room = [];

export default class Home extends React.Component {
  state = {
    roomInfo: []
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: "#FC5C63",
      borderBottomWidth: 0,
      height: 60
    },
    headerTintColor: "#fff",
    headerLeft: null
  });
  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room", {
        params: {
          city: "paris"
        }
      })
      .then(response => {
        console.log(response.data["rooms"]);
        for (let i = 0; i < response.data["rooms"].length; i++) {
          room.push(
            <View style={styles.bloc} key={i}>
              <View style={styles.blocInfo}>
                <Image
                  style={styles.visuelRoom}
                  source={{ uri: response.data["rooms"][i].photos[0] }}
                />
                <View style={styles.price}>
                  <Text style={styles.priceText}>
                    {response.data["rooms"][i].price} €
                  </Text>
                </View>
              </View>

              <View style={styles.description}>
                <Text style={[styles.text, styles.flex]}>
                  {response.data["rooms"][i].description.length > 30
                    ? response.data["rooms"][i].description.substring(
                        0,
                        30 - 3
                      ) + "..."
                    : response.data["rooms"][i].description}
                </Text>
                <Image
                  style={styles.visuelUser}
                  source={{
                    uri: response.data["rooms"][i].user.account.photos[0]
                  }}
                />
              </View>
            </View>
          );
        }
        this.setState({
          roomInfo: room
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log("room", room);
    const { goBack } = this.props.navigation;
    return (
      <ScrollView>
        {this.state.roomInfo}
        <Button title="Go back" onPress={() => goBack()} />
      </ScrollView>
    );
  }
}

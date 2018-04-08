import React from "react";
import { Button, View, Text, ScrollView, Image } from "react-native";
import axios from "axios";

const room = [];

export default class Home extends React.Component {
  state = {
    roomInfo: []
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
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
            <View key={i}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: response.data["rooms"][i].photos[0] }}
              />
              <Text>{response.data["rooms"][i].price} €</Text>
              <Text>
                {response.data["rooms"][i].description.length > 30
                  ? response.data["rooms"][i].description.substring(0, 30 - 3) +
                    "..."
                  : response.data["rooms"][i].description}
              </Text>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: response.data["rooms"][i].user.account.photos[0]
                }}
              />
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

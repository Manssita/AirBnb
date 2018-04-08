import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bloc: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
    paddingBottom: 10
  },
  blocInfo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 10
  },
  visuelRoom: {
    width: "100%",
    height: 200
  },
  text: {
    fontSize: 20,
    color: "#121212"
  },
  description: {
    flexDirection: "row"
  },
  flex: {
    flex: 1
  },
  visuelUser: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  price: {
    padding: 20,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0
  },
  priceText: {
    color: "#fff",
    fontSize: 22
  }
});

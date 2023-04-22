import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const HomeScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      props.navigation.navigate("Login");
    }

    const decoded = jwtDecode(token);
    setName(decoded.fullName);
    setEmail(decoded.email);
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <View>
      <View>
        <Text>Welcome {name ? name : ""} </Text>
      </View>
      <View>
        <Text>Your email: {email ? email : ""}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

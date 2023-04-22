import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("jwtToken", token);
    } catch (e) {
      console.log("Error storing token:", e);
    }
  };

  const getToken = async (token) => {
    try {
      const token = await AsyncStorage.getItem("token", token);
      if (token !== null) {
        return token;
      }
    } catch (e) {
      console.log("Error retrieving token:", e);
    }
  };

  const loadProfile = async (value) => {
    const token = await AsyncStorage.getItem("token", value);
    console.log(token);
  };

  useEffect(() => {
    getToken();
  });

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

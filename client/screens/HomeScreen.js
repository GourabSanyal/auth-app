import { StyleSheet, Text, View, Button } from "react-native";
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

  const logout = (props) => {
    AsyncStorage.removeItem("token")
      .then(() => {
        props.navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome {name ? name : ""} </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Your email: {email ? email : ""}
          <Text></Text>{" "}
        </Text>
        <Button title="Logout" onPress={() => logout(props)} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
  },
});

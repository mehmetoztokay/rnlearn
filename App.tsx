import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Banner from "./src/components/Banner";
import UserBadge, {user} from "./src/components/UserBadge";
import "./global.css";

const users: user[] = [
  {id: 1, name: "mehmet", avatarUrl: "urlmehmet", surname: "oztokay"},
  {id: 2, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 3, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 4, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 5, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 6, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 7, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
  {id: 8, name: "ahmet", avatarUrl: "urlahmet", surname: "oztokayahmet"},
];

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Banner />
      {users.map((user, index): React.ReactNode => {
        return <Text key={user.id}>{user.name}</Text>;
      })}

      <Text className="text-4xl font-bold text-blue-500 md:text-red-500">Welcome to Nativewind!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {StyleSheet, Text, View} from "react-native";
import React from "react";

export interface user {
  name: string;
  surname: string;
  avatarUrl: string;
  id: number;
}

const UserBadge = ({name, surname, avatarUrl}: user) => {
  return (
    <View>
      <Text>UserBadge</Text>
      <Text>
        {name} {surname} {avatarUrl}
      </Text>
    </View>
  );
};

export default UserBadge;

const styles = StyleSheet.create({});

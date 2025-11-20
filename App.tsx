import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>Press Me</Text>
        </Pressable>

        <Modal visible={modalVisible} animationType="slide">
          <SafeAreaView style={{flex: 1, backgroundColor: "#cecece"}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Text>Modal is open!</Text>
              <Pressable style={{backgroundColor: "purple", padding: 5, borderRadius: 5}} onPress={() => setModalVisible(false)}>
                <Text style={{color: "white"}}>Close Modal</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
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

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/bird.jpg")}
      >
        <Text style={styles.text}>Open up App!!!</Text>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    paddingTop: 640,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    alignItems: "center",
  },
});

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default App = () => (
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Text style={styles.text}>I take all available space!</Text>
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center", // Выравнивание по вертикали
//     alignItems: "center", // Выравнивание по горизонтали
//   },
//   box: {
//     flex: 1,
//     backgroundColor: "green", // Цвет фона для выделения
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     paddingHorizontal: 10,
//     fontSize: 20,
//     color: "#fff",
//   },
// });

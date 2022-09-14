import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/screens/Auth";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Auth />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

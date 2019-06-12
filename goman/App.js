import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProviderProfile from "./components/providers/provider-profile";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";



const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};


export default function App() {
  return (
    
      <PaperProvider theme={theme}>
        <ProviderProfile />
      </PaperProvider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

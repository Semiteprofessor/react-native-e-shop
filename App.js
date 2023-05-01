/** @format */

import React from "react";
import { NativeBaseProvider } from "native-base";
import ProfileScreen from "./src/Screens/ProfileScreen";
import HomeScreen from "./src/Screens/HomeScreen";

const App = () => {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
};

export default App;

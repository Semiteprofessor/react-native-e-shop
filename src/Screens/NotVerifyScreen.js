/** @format */

import {
  Box,
  View,
  Image,
  Heading,
  VStack,
  Input,
  Text,
  Button,
  Pressable,
  Center,
} from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Buttons from "../Components/Button";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <View
          p={5}
          bg={Colors.white}
          rounded={70}
          borderWidth={2}
          borderColor={Colors.orange}>
          <Image
            source={require("../../assets/images/shopping-bag.png")}
            alt="Logo"
            size="lg"
          />
        </View>
        <VStack space={6} px={5} alignItems="center">
          <Buttons bg={Colors.black} color={Colors.white}>
            REGISTER
          </Buttons>
          <Buttons bg={Colors.white} color={Colors.black}>
            LOGIN
          </Buttons>
        </VStack>
      </Center>
    </Box>
  );
};

export default NotVerifyScreen;

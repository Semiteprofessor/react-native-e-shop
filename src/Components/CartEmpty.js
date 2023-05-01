/** @format */

import { Text, View, Box, Center } from "native-base";
import React from "react";
import Colors from "../color";
import { FontAwesome5 } from "@expo/vector-icons";
import Buttons from "./Button";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome5 name="shopping-cart" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
        <Buttons bg={Colors.black} color={Colors.white}>
          START SHOPPING
        </Buttons>
      </Center>
    </Box>
  );
};

export default CartEmpty;

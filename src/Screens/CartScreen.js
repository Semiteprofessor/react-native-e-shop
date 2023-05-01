/** @format */

import {
  Text,
  View,
  Box,
  Center,
  ScrollView,
  HStack,
  Button,
} from "native-base";
import React from "react";
import Colors from "../color";
import CartItems from "../Components/CartItems";
import Buttons from "../Components/Button";

const CartScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}

      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* If Cart is empty */}
      {/* <CartEmpty /> */}
      {/* CArt Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Button */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center">
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}>
              1700
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
          <Buttons bg={Colors.black} color={Colors.white} mt={10}>
            CHECKOUT
          </Buttons>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;

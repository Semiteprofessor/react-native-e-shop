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
} from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const LoginScreen = () => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/images/login.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center">
        <Heading color={Colors.white}>LOGIN</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.white} />
            }
            variant="underlined"
            placeholder="semiteprofessor@gmailcom"
            w="100%"
            type="email"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* Password */}
          <Input
            InputLeftElement={
              <MaterialIcons name="visibility" size={20} color={Colors.white} />
            }
            variant="underlined"
            placeholder="**************"
            w="100%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          <Button _pressed={{ bg: Colors.main }} my={30} w="100%" rounded={50}>
            LOGIN
          </Button>
          <Pressable mt={4}>
            {" "}
            <Text color={Colors.deepestGray}>SIGN UP</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;

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
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";

const RegisterScreen = () => {
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
        <Heading color={Colors.white}>SIGN UP</Heading>
        <VStack space={8} pt="6">
          {/* username */}
          <Input
            InputLeftElement={
              <FontAwesome5 name="user" size={20} color={Colors.white} />
            }
            variant="underlined"
            placeholder="John Doe"
            w="100%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* email */}
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
            SIGN UP
          </Button>
          <Pressable mt={4}>
            {" "}
            <Text color={Colors.deepestGray}>LOGIN</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;

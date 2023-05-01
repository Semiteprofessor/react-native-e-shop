/** @format */

import {
  Text,
  View,
  ScrollView,
  Box,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttons from "../Components/Button";
import Review from "../Components/Review";

const SingleProduct = () => {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/shopping-bag.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={3} lineHeight={22}>
          New Adidas shoe from Amazon Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ₦2000
          </Heading>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          omnis repellat quas officiis quis dolor, repellendus autem distinctio.
          Repellendus tempore voluptate sapiente error ut voluptatum hic sit sed
          enim incidunt deserunt eveniet distinctio fugit aspernatur possimus
          minus, modi, voluptatem, earum necessitatibus atque. Repudiandae
          consequatur sit consectetur molestiae earum voluptates magnam!
        </Text>
        <Buttons bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttons>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProduct;

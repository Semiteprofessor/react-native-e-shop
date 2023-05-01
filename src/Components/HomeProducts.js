/** @format */

import {
  ScrollView,
  Flex,
  Image,
  Pressable,
  Box,
  Heading,
  Text,
} from "native-base";
import React from "react";
import productData from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";

const HomeProducts = () => {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}>
        {productData.map((product) => (
          <Pressable
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden">
            <Image
              source={{ uri: product.imageUrl1 }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ₦{product.price.toLocaleString()}
              </Heading>
              <Heading size="sm" bold>
                <Text fontSize={10} mt={1} isTruncated w="full">
                  {product.name}
                </Text>
              </Heading>
              {/* Rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;

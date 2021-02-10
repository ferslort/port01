import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZE } from "../constants";
import { getList } from "../utils/getList";

const Carrusel = () => {
  const [animation] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Content animation={animation} />
      </View>
      <Pounts animation={animation} />
      <View>
        <TouchableOpacity opacity={0.8} style={styles.containerBtn}>
          <Text style={styles.btnText}>Iniciar</Text>
          <MaterialCommunityIcons
            name="arrow-right-bold-circle"
            size={30}
            color={COLORS.white}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Content = ({ animation }) => {
  return (
    <View>
      <ScrollView
        pagingEnabled
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        {getList.map((item, index) => {
          return (
            <View key={`img-${index}`} style={{ width: SIZE.width }}>
              <View style={{ marginBottom: "10%" }}>
                <Image
                  source={item.image}
                  style={styles.img}
                  resizeMode="cover"
                />
              </View>
              <View style={{ marginHorizontal: "10%" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.descriptions}>{item.descriptions}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Pounts = ({ animation }) => {
  const position = Animated.divide(animation, SIZE.width);

  return (
    <View style={styles.sectionPounts}>
      {getList.map((item, index) => {
        const opacityInterpole = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const sizeIntepolate = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 15, 10],
          extrapolate: "clamp",
        });

        const bgInterpole = animation.interpolate({
          inputRange: [0 * SIZE.width, 1 * SIZE.width, 2 * SIZE.width],
          outputRange: [COLORS.blue, "tomato", "cyan"],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.pounts,
              {
                width: sizeIntepolate,
                height: sizeIntepolate,
                opacity: opacityInterpole,
                backgroundColor: bgInterpole,
              },
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Carrusel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerBtn: {
    backgroundColor: COLORS.blue,
    marginHorizontal: "15%",
    marginBottom: "5%",
    padding: SIZE.padding,
    paddingVertical: 15,
    borderRadius: SIZE.radius,
    alignItems: "center",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "black",
    shadowOpacity: 0.6,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    color: COLORS.white,
    ...FONTS.h3,
    textTransform: "uppercase",
  },
  title: {
    ...FONTS.h1,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: SIZE.base,
  },
  descriptions: { ...FONTS.p3, textAlign: "center" },
  sectionPounts: {
    flexDirection: "row",
    position: "absolute",
    bottom: "38%",
    justifyContent: "center",
    width: "100%",
  },
  pounts: {
    borderRadius: 20,
    marginHorizontal: 8,
  },
  img: { width: SIZE.width, height: SIZE.height / 2.3 },
});

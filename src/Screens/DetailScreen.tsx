import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStackParams } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SharedElement } from "react-navigation-shared-element";

type Props = NativeStackScreenProps<AppStackParams, "DetailsScreen">;

const DetailScreen = ({ navigation, route }: Props) => {
	const { item } = route.params;
	return (
		<View>
			<SharedElement id={item.title}>
				<Image source={{ uri: item.image }} resizeMode='cover' style={styles.image} />
			</SharedElement>
			<SharedElement id={item.id}>
				<Text onPress={navigation.goBack} style={styles.text}>
					{item.title}
				</Text>
			</SharedElement>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	image: {
		width: Dimensions.get("screen").width,
		aspectRatio: "1/1",
	},
	text: {
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center",
	},
});

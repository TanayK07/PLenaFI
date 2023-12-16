import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const TitleText = ({ children }) => (
	<Text style={styles.titleText}>{children}</Text>
);

const SubtitleText = ({ children }) => (
	<Text style={styles.subtitleText}>{children}</Text>
);

const Categories = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<TitleText>Categories</TitleText>
				<SubtitleText>Coming Soon</SubtitleText>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 7,
	},
	innerContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	titleText: {
		fontSize: 20,
		color: "#000",
		textTransform: "uppercase",
		textAlign: "center",
		fontWeight: "600",
	},
	subtitleText: {
		fontSize: 14,
		color: "#000",
		textTransform: "uppercase",
		textAlign: "center",
		fontWeight: "600",
	},
});

export default Categories;

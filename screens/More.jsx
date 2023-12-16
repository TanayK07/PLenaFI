import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Additional = () => {
	return (
		<SafeAreaView className="w-full bg-white h-full pt-7">
			<View className="flex items-center justify-center w-full h-full">
				<Text className="text-black text-xl uppercase text-center font-[600]">
					Additional
				</Text>
				<Text className="text-black text-sm uppercase text-center font-[600]">
					In Progress
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Additional;

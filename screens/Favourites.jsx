import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import {
	Ionicons,
	AntDesign,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import useFavStore from "../utils/favouriteStore";
import useCartStore from "../utils/cartStore";

const Favourites = ({ navigation }) => {
	const { addProduct, items } = useCartStore();
	const { addFavProduct, fav_products, removeFavProduct } = useFavStore();
	let x = 0;

	const handleFavPress = (item) => {
		const isFav = fav_products?.find((p) => p?.id === item?.id);
		if (!isFav) {
			addFavProduct(item);
		} else {
			removeFavProduct(item);
		}
	};

	const renderItem = ({ item, index }) => {
		const isFav = fav_products?.filter((p) => p.isFav);
		const isLastItem =
			fav_products?.indexOf(fav_products[fav_products?.length - 1]) === index;
		const itemClass = isLastItem
			? "w-fullshadow-md mb-32 border border-gray-100  bg-[#fff] p-3 rounded-xl shadow-gray-400"
			: "w-fullshadow-md mb-5 border border-gray-100  bg-[#fff] p-3 rounded-xl shadow-gray-400";

		return (
			<TouchableOpacity
				onPress={() => navigation.navigate("Product", { item })}
				className={itemClass}
			>
				<View className="w-full relative">
					<Image
						className="mx-auto w-full h-[150px] rounded-md"
						source={{ uri: item?.thumbnail }}
					/>
					<View className="flex items-center justify-between flex-row my-3">
						<Text
							className="text-base"
							style={{ fontFamily: "Manrope_600SemiBold" }}
						>
							${item?.price}
						</Text>
						<View className="flex items-center justify-center gap-2 flex-row">
							<TouchableOpacity
								onPress={() => handleFavPress(item)}
								className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
							>
								<AntDesign
									name="heart"
									size={28}
									color={
										isFav?.find((p) => p?.id === item?.id) ? "red" : "white"
									}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => addProduct(item)}
								className="w-[30px] h-[30px] flex items-center justify-center bg-[#2A4BA0] rounded-full"
							>
								<AntDesign name="plus" size={20} color="white" />
							</TouchableOpacity>
						</View>
					</View>
					<Text
						className="text-base"
						style={{ fontFamily: "Manrope_500Medium" }}
					>
						{item?.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView className="w-full bg-white h-full pt-7">
			<View className="p-5 flex items-center flex-row justify-between">
				<View className="flex flex-row items-center gap-3">
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className="bg-gray-100 p-2 rounded-full w-[45px] flex items-center justify-center h-[45px]"
					>
						<Ionicons name="chevron-back-outline" size={25} color="black" />
					</TouchableOpacity>
					<Text
						className="text-xl"
						style={{ fontFamily: "Manrope_400Regular" }}
					>
						Favourite Products
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Cart")}
					className="relative"
				>
					<MaterialCommunityIcons
						name="shopping-outline"
						size={30}
						color="black"
					/>
					<Text
						style={{ fontFamily: "Manrope_400Regular" }}
						className="absolute top-0 bg-[#ffc800] text-base w-6 rounded-full -right-2 text-center h-6"
					>
						{items}
					</Text>
				</TouchableOpacity>
			</View>
			<View className="px-5 pt-5 pb-20">
				{fav_products?.length > 0 ? (
					<FlatList
						data={fav_products}
						renderItem={renderItem}
						keyExtractor={(item) => x++}
					/>
				) : (
					<View className="w-full h-[60vh] flex items-center justify-center">
						<Text style={{ fontFamily: "Manrope_400Regular" }}>EMPTY CART</Text>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Favourites;

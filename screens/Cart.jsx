import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Image,
	SafeAreaView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import useCartStore from "../utils/cartStore";

const CartItem = ({ item, addProduct, reduceProduct }) => (
	<View style={styles.cartItem}>
		<View>
			<Image style={styles.thumbnail} source={{ uri: item?.thumbnail }} />
		</View>
		<View style={styles.itemDetails}>
			<Text style={styles.itemTitle}>${item?.title}</Text>
			<Text style={styles.itemPrice}>${item?.price}</Text>
		</View>
		<View style={styles.quantityContainer}>
			<TouchableOpacity
				onPress={() => addProduct(item)}
				style={styles.quantityButton}
			>
				<AntDesign name="plus" size={20} color="black" />
			</TouchableOpacity>
			<Text style={styles.quantityText}>{item?.quantity}</Text>
			<TouchableOpacity
				onPress={() => reduceProduct(item)}
				style={styles.quantityButton}
			>
				<AntDesign name="minus" size={20} color="black" />
			</TouchableOpacity>
		</View>
	</View>
);

const Cart = ({ navigation }) => {
	const { addProduct, items, reduceProduct, products, subtotal, clearCart } =
		useCartStore();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={"#fff"} />
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<Ionicons name="chevron-back-outline" size={25} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerText}>Shopping Cart({items})</Text>
			</View>
			{products?.length > 0 ? (
				<View style={styles.cartItemsContainer}>
					<FlatList
						data={products}
						renderItem={({ item }) => (
							<CartItem
								item={item}
								addProduct={addProduct}
								reduceProduct={reduceProduct}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
			) : (
				<View style={styles.emptyCartContainer}>
					<Text style={styles.emptyCartText}>EMPTY CART</Text>
				</View>
			)}

			{products?.length > 0 && (
				<View style={styles.clearCartContainer}>
					<TouchableOpacity onPress={clearCart}>
						<Text style={styles.clearCartText}>Clear Cart</Text>
					</TouchableOpacity>
				</View>
			)}

			<View style={styles.checkoutContainer}>
				<View style={styles.subtotalContainer}>
					<Text style={styles.subtotalText}>Subtotal</Text>
					<Text style={styles.subtotalValue}>${subtotal}</Text>
				</View>
				<View style={styles.deliveryContainer}>
					<Text style={styles.deliveryText}>Delivery</Text>
					<Text style={styles.deliveryValue}>${items > 0 ? 2 : 0}</Text>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.totalText}>Total</Text>
					<Text style={styles.totalValue}>${items > 0 ? subtotal + 2 : 0}</Text>
				</View>
				<TouchableOpacity style={styles.checkoutButton}>
					<Text style={styles.checkoutButtonText}>Proceed To Checkout</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = {
	container: { flex: 1, backgroundColor: "#fff" },
	header: { flexDirection: "row", alignItems: "center", padding: 5 },
	backButton: {
		backgroundColor: "#ccc",
		padding: 2,
		borderRadius: 22.5,
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: { fontSize: 20, fontFamily: "Manrope_400Regular" },
	cartItemsContainer: { paddingHorizontal: 5, maxHeight: "45vh" },
	cartItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		paddingVertical: 4,
		paddingHorizontal: 2,
	},
	thumbnail: { width: 70, height: 35, alignSelf: "center" },
	itemDetails: { width: "33%" },
	itemTitle: { fontFamily: "Manrope_400Regular" },
	itemPrice: { fontFamily: "Manrope_400Regular" },
	quantityContainer: { flexDirection: "row", alignItems: "center" },
	quantityButton: {
		width: 40,
		height: 40,
		backgroundColor: "#ccc",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	quantityText: { fontFamily: "Manrope_400Regular", marginHorizontal: 5 },
	emptyCartContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyCartText: { fontFamily: "Manrope_400Regular" },
	clearCartContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingHorizontal: 5,
	},
	clearCartText: {
		fontFamily: "Manrope_400Regular",
		fontSize: 16,
		color: "#2A4BA0",
	},
	checkoutContainer: {
		position: "absolute",
		bottom: -16,
		width: "100%",
		padding: 2,
	},
	subtotalContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 5,
		paddingBottom: 5,
	},
	subtotalText: {
		fontFamily: "Manrope_500Medium",
		fontSize: 18,
		color: "#666",
	},
	subtotalValue: { fontSize: 18 },
	deliveryContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 5,
		paddingBottom: 5,
	},
	deliveryText: {
		fontFamily: "Manrope_500Medium",
		fontSize: 18,
		color: "#666",
	},
	deliveryValue: { fontSize: 18 },
	totalContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 5,
		paddingBottom: 5,
	},
	totalText: { fontFamily: "Manrope_500Medium", fontSize: 18, color: "#666" },
	totalValue: { fontSize: 18 },
	checkoutButton: {
		width: "100%",
		borderRadius: 20,
		backgroundColor: "#2A4BA0",
		padding: 5,
	},
	checkoutButtonText: {
		fontFamily: "Manrope_400Regular",
		textAlign: "center",
		color: "#fff",
		fontSize: 16,
	},
};

export default Cart;

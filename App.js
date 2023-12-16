import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Favourites from "./screens/Favourites";
import More from "./screens/More";
import {
	useFonts,
	Manrope_200ExtraLight,
	Manrope_300Light,
	Manrope_400Regular,
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_700Bold,
	Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import BottomTabs from "./components/BottomTabs/BottomTabs";
import Cart from "./screens/Cart";
import "react-native-gesture-handler";
import Product from "./screens/Product";
import { LogBox } from "react-native";
export default function App() {
	const Stack = createNativeStackNavigator();
	let [fontsLoaded, fontError] = useFonts({
		Manrope_200ExtraLight,
		Manrope_300Light,
		Manrope_400Regular,
		Manrope_500Medium,
		Manrope_600SemiBold,
		Manrope_700Bold,
		Manrope_800ExtraBold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	LogBox.ignoreAllLogs();

	const commonOptions = {
		title: "",
		headerStyle: {
			backgroundColor: "#01031e",
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontWeight: "500",
		},
	};

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={BottomTabs}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="BottomTabs"
					component={BottomTabs}
					options={commonOptions}
				/>
				<Stack.Screen name="Home" component={Home} options={commonOptions} />
				<Stack.Screen
					name="Categories"
					component={Categories}
					options={commonOptions}
				/>
				<Stack.Screen
					name="Favourites"
					component={Favourites}
					options={commonOptions}
				/>
				<Stack.Screen name="More" component={More} options={commonOptions} />
				<Stack.Screen name="Cart" component={Cart} options={commonOptions} />
				<Stack.Screen
					name="Product"
					component={Product}
					options={commonOptions}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AppStackParams } from "../types";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";

const App = createSharedElementStackNavigator<AppStackParams>();

export const AppStack = () => {
	return (
		<App.Navigator screenOptions={{ headerShown: false }}>
			<App.Screen name='HomeScreen' component={HomeScreen} />
			<App.Screen
				name='DetailsScreen'
				component={DetailScreen}
				sharedElements={(route, otherRoute, showing) => {
					const { item } = route.params;
					return [
						`${item.title}`,
						{
							id: item.id,
							animation: "fade",
						},
					];
				}}
			/>
		</App.Navigator>
	);
};

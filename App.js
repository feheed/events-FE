import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import CatagoryList from "./Component/Category/CatagoryList";
//import StackNavigation from "./Component/Navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <CatagoryList />
    </NativeBaseProvider>
  );
}

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
// import StackNavigation from "./Component/Navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>{/* <StackNavigation /> */}</NavigationContainer>
    </NativeBaseProvider>
  );
}

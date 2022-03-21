import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import CreateEventaModal from "./Event/CreateEventModal";
// import StackNavigation from "./Component/Navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <CreateEventaModal />
      <NavigationContainer>{/* <StackNavigation /> */}</NavigationContainer>
    </NativeBaseProvider>
  );
}

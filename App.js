import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import CreateEventaModal from "./Event/CreateEventModal";
import DTP from "./Event/DTP";

// import StackNavigation from "./Component/Navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <CreateEventaModal />

      <NavigationContainer>{/* <StackNavigation /> */}</NavigationContainer>
      <NavigationContainer></NavigationContainer>
    </NativeBaseProvider>
  );
}

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
import CreateEventaModal from "./Event/CreateEventModal";
import DTP from "./Event/DTP";

// import StackNavigation from "./Component/Navigation/StackNavigation";
=======
import StackNavigation from "./Component/Navigation/StackNavigation";
>>>>>>> 40aaacf608bcf9014e146c4f5b5b17fb94690c45

export default function App() {
  return (
    <NativeBaseProvider>
<<<<<<< HEAD
      <CreateEventaModal />

      <NavigationContainer>{/* <StackNavigation /> */}</NavigationContainer>
      <NavigationContainer></NavigationContainer>
=======
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
>>>>>>> 40aaacf608bcf9014e146c4f5b5b17fb94690c45
    </NativeBaseProvider>
  );
}

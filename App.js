import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import EventList from "./Component/Event/EventList";
// import StackNavigation from "./Component/Navigation/StackNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <EventList />
    </NativeBaseProvider>
  );
}

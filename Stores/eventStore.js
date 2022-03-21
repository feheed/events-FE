import { makeObservable, observable, action, configure } from "mobx";
import api from "./api";

class Eventtore {
  events = [];

  constructor() {
    makeObservable(this, {
      fetchEvents: action,
      createEvents: action,
    });
  }

  fetchEvents = async () => {
    try {
      const res = await api.get("/Events");
      this.trips = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  createEvents = async (newEvent, navigation) => {
    try {
      const response = await api.post("/events", newEvent);
      this.events.push(response.data);

      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}
const eventStore = new EventStore();
eventStore.fetchEvents();
export default eventStore;

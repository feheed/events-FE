import { makeAutoObservable, configure, get } from "mobx";
import api from "./api";

class EventStore {
  constructor() {
    makeAutoObservable(this);
  }
  events = [];
  loading = true;
  //getEvents:
  getEvents = async () => {
    try {
      const response = await api.get("/events");
      this.events = response.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: eventStore.js ~ line 16 ~ EventStore ~ getEvents= ~ error",
        error
      );
    }
  };

  //cancelEvent
  cancelEvent = async (eventId, navigation, toast) => {
    try {
      await api.delete(`/events/${eventId}`);
      let tempEvents = this.events.filter((event) => event._id !== eventId);
      this.events = tempEvents;
      navigation.navigate("Events");
      toast.show({ title: `Your event has been deleted`, status: "danger" });
    } catch (error) {
      console.log(
        "🚀 ~ file: eventStore.js ~ line 39 ~ EventStore ~ cancelEvent= ~ error",
        error
      );
    }
  };
}

const eventStore = new EventStore();
eventStore.getEvents();
export default eventStore;

import {
  makeObservable,
  observable,
  action,
  configure,
  makeAutoObservable,
} from "mobx";
import api from "./api";

class Eventstore {
  events = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
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

const eventStore = new Eventstore();
eventStore.getEvents();
export default eventStore;

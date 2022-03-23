import { makeAutoObservable } from "mobx";
import api from "./api";

class CatagoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  catagories = {
    event1: "SPORT",
    nevent2: "EDUCATIONAL",
  };

  getCatagories = async () => {
    try {
      const res = await api.get("/catagories");
      this.catagories = res.data;
    } catch (error) {
      console.log(
        "🚀 ~ file: catagoryStore.js ~ line 15 ~ CatagoryStore ~ getCatagories= ~ error",
        error
      );
    }
  };
}
const catagoryStore = new CatagoryStore();
export default catagoryStore;

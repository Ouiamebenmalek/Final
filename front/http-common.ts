import axios from "axios";

export default axios.create({
  baseURL: "https://backendpokemon-production.up.railway.app/",
  headers: {
    "Content-type": "application/json"
  }
});
import axios from "axios";
const instance = axios.create({
  baseURL: "https://gestion-38ed2-default-rtdb.firebaseio.com/",
});
instance.defaults.headers.common['Authoriz'] = 'head';

export default instance;

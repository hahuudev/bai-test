import axios from "axios";

const uri = import.meta.env.URI || "https://test-react.agiletech.vn";
const request = axios.create({
    baseURL: uri,
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") },
});

export default request;

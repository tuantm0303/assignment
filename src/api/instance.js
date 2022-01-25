import axios from "axios";

const instance = axios.create({
    baseURL: "https://61e7cb38e32cd90017acbd7a.mockapi.io",
});

export default instance;
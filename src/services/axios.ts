import axios from "axios";

const openAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { openAxiosInstance };

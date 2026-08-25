import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getDashboardStats = () =>
  API.get("/dashboard/stats/");

export const getCategoryStats = () =>
  API.get("/dashboard/categories/");

export const getRecentEmails = () =>
  API.get("/dashboard/emails/");
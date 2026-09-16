import axios from "axios";

const API = axios.create({
 baseURL: "https://ai-customer-support-agent-mpg5.onrender.com/api",
});

export const getDashboardStats = () =>
  API.get("/dashboard/stats/");

export const getCategoryStats = () =>
  API.get("/dashboard/categories/");

export const getRecentEmails = () =>
  API.get("/dashboard/emails/");
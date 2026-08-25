import { useEffect, useState } from "react";

import StatsCards from "../components/StatsCards";
import CategoryChart from "../components/CategoryChart";
import EmailTable from "../components/EmailTable";

import {
  getDashboardStats,
  getCategoryStats,
  getRecentEmails,
} from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({});
  const [categories, setCategories] = useState([]);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [statsRes, categoriesRes, emailsRes] =
          await Promise.all([
            getDashboardStats(),
            getCategoryStats(),
            getRecentEmails(),
          ]);

        console.log("Stats:", statsRes.data);
        console.log("Categories:", categoriesRes.data);
        console.log("Emails:", emailsRes.data);

        setStats(statsRes.data);
        setCategories(categoriesRes.data);
        setEmails(emailsRes.data);
      } catch (error) {
        console.error("Dashboard API error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div>
      <h1>AI Email Support Dashboard</h1>

      <StatsCards stats={stats} />

      <CategoryChart data={categories} />

      <EmailTable emails={emails} />
    </div>
  );
}

export default Dashboard;
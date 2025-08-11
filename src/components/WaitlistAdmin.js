"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function WaitlistAdmin() {
  const [waitlistData, setWaitlistData] = useState([]);
  const [stats, setStats] = useState({ total: 0, hero: 0, footer: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      setLoading(true);

      // Fetch all waitlist entries
      const { data, error: fetchError } = await supabase
        .from("waitlist")
        .select("*")
        .eq("is_subscribed", true)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      setWaitlistData(data || []);

      // Calculate stats
      const total = data?.length || 0;
      const hero = data?.filter((item) => item.source === "hero").length || 0;
      const footer =
        data?.filter((item) => item.source === "footer").length || 0;

      setStats({ total, hero, footer });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ["Email", "Source", "Signup Date"];
    const csvData = waitlistData.map((item) => [
      item.email,
      item.source,
      new Date(item.created_at).toLocaleDateString(),
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nutrichef-waitlist-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Nutrichef Waitlist Dashboard
            </h1>
            <button
              onClick={exportToCSV}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              Export CSV
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-medium">Total Signups</h3>
              <p className="text-3xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-medium">Hero Signups</h3>
              <p className="text-3xl font-bold">{stats.hero}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-medium">Footer Signups</h3>
              <p className="text-3xl font-bold">{stats.footer}</p>
            </div>
          </div>

          {/* Waitlist Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Source</th>
                  <th className="px-4 py-2 text-left">Signup Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {waitlistData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.source === "hero"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.source}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {waitlistData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No signups yet. Share your landing page to get started!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

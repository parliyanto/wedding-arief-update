"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminDashboard() {
  const [rsvp, setRsvp] = useState<any[]>([]);
  const [wishes, setWishes] = useState<any[]>([]);
  const [visitors, setVisitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // === FETCH ALL DATA ===
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: rsvpData } = await supabase
        .from("rsvp_guest")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: wishesData } = await supabase
        .from("best_wishes")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: visitorsData } = await supabase
        .from("visitor_logs")
        .select("*")
        .order("opened_at", { ascending: false });

      setRsvp(rsvpData || []);
      setWishes(wishesData || []);
      setVisitors(visitorsData || []);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  // === QUICK STATS ===
  const totalVisitors = visitors.length;
  const totalRSVP = rsvp.length;
  const totalWishes = wishes.length;
  const attending = rsvp.filter((x) => x.status === "Yes").length;
  const notAttending = rsvp.filter((x) => x.status === "No").length;
  const totalGuestCount = rsvp.reduce(
    (sum, x) => sum + Number(x.guest_count || 0),
    0
  );

  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-10">📊 Wedding Dashboard</h1>

      {/* === STAT CARDS === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Stat title="👀 Total Visitors" value={totalVisitors} />
        <Stat title="💌 Total RSVP" value={totalRSVP} />
        <Stat title="💖 Total Wishes" value={totalWishes} />
      </div>

      {/* RSVP SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Stat title="👍 Attending" value={attending} />
        <Stat title="👎 Not Attending" value={notAttending} />
        <Stat title="👥 Guest Count Total" value={totalGuestCount} />
      </div>

      {/* === VISITORS TABLE === */}
      <Section title="Visitors Log">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <Th>Name</Th>
              <Th>Device</Th>
              <Th>Duration</Th>
              <Th>Opened At</Th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v) => (
              <tr key={v.id} className="border-b">
                <Td>{v.guest_name || "-"}</Td>
                <Td>{v.device}</Td>
                <Td>{v.duration_seconds ? `${v.duration_seconds}s` : "-"}</Td>
                <Td>
                  {new Date(v.opened_at).toLocaleString("id-ID", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* === RSVP TABLE === */}
      <Section title="RSVP Responses">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Guests</Th>
              <Th>Submitted</Th>
            </tr>
          </thead>
          <tbody>
            {rsvp.map((r) => (
              <tr key={r.id} className="border-b">
                <Td>{r.name}</Td>
                <Td>{r.status}</Td>
                <Td>{r.guest_count}</Td>
                <Td>
                  {new Date(r.created_at).toLocaleString("id-ID", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* === WISHES TABLE === */}
      <Section title="Best Wishes">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <Th>Name</Th>
              <Th>Message</Th>
              <Th>Submitted</Th>
            </tr>
          </thead>
          <tbody>
            {wishes.map((w) => (
              <tr key={w.id} className="border-b">
                <Td className="font-semibold">{w.name}</Td>
                <Td>{w.message}</Td>
                <Td>
                  {new Date(w.created_at).toLocaleString("id-ID", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="mb-14">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white shadow-md rounded-xl p-6">{children}</div>
    </div>
  );
}

function Th({ children }: any) {
  return <th className="text-left px-3 py-2 border">{children}</th>;
}

function Td({ children }: any) {
  return <td className="px-3 py-2 border">{children}</td>;
}

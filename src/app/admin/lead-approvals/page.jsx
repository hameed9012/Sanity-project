"use client";

import { useEffect, useMemo, useState } from "react";

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
}

export default function LeadApprovalsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [workingId, setWorkingId] = useState("");
  const [actionLabel, setActionLabel] = useState("");

  const pendingItems = useMemo(
    () => items.filter((item) => item?.status === "pending"),
    [items]
  );

  async function loadQueue() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead-approvals?status=pending&limit=200", {
        cache: "no-store",
      });
      const json = await res.json();
      if (!res.ok || !json?.success) {
        throw new Error(json?.message || "Could not load the queue.");
      }
      setItems(Array.isArray(json?.leads) ? json.leads : []);
    } catch (err) {
      setError(String(err?.message || err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadQueue();
  }, []);

  async function approveItem(id) {
    setWorkingId(id);
    setActionLabel("approve");
    setError("");
    try {
      const res = await fetch(`/api/lead-approvals/${id}/approve`, {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok || !json?.success) {
        throw new Error(json?.message || "Could not approve the lead.");
      }

      if (json?.brokerWhatsAppHref && !json?.forwardResult?.sent) {
        window.open(json.brokerWhatsAppHref, "_blank", "noopener,noreferrer");
      }

      await loadQueue();
    } catch (err) {
      setError(String(err?.message || err));
    } finally {
      setWorkingId("");
      setActionLabel("");
    }
  }

  async function rejectItem(id) {
    setWorkingId(id);
    setActionLabel("reject");
    setError("");
    try {
      const res = await fetch(`/api/lead-approvals/${id}/reject`, {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok || !json?.success) {
        throw new Error(json?.message || "Could not reject the lead.");
      }

      await loadQueue();
    } catch (err) {
      setError(String(err?.message || err));
    } finally {
      setWorkingId("");
      setActionLabel("");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f6f1",
        color: "#111",
        padding: "120px 24px 48px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>Lead Approvals</h1>
        <p style={{ marginBottom: 24, color: "#5d5d5d" }}>
          Kodmani-first review queue for form enquiries and WhatsApp website leads.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <button
            type="button"
            onClick={loadQueue}
            style={{
              border: "1px solid #c9a26a",
              background: "#111",
              color: "#fff",
              borderRadius: 999,
              padding: "10px 18px",
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
          <div style={{ alignSelf: "center", color: "#5d5d5d" }}>
            Pending leads: {pendingItems.length}
          </div>
        </div>

        {error ? (
          <div
            style={{
              marginBottom: 20,
              padding: 14,
              borderRadius: 12,
              background: "#ffe9e7",
              color: "#a52a1f",
            }}
          >
            {error}
          </div>
        ) : null}

        {loading ? (
          <div>Loading...</div>
        ) : pendingItems.length === 0 ? (
          <div>No pending leads right now.</div>
        ) : (
          <div style={{ display: "grid", gap: 16 }}>
            {pendingItems.map((item) => (
              <article
                key={item._id}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201, 162, 106, 0.25)",
                  borderRadius: 20,
                  padding: 20,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0, fontSize: 24 }}>
                      {item.fullName || "Unnamed lead"}
                    </h2>
                    <div style={{ color: "#666", marginTop: 4 }}>
                      {item.project || "No project specified"} |{" "}
                      {item.source || "Website"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => approveItem(item._id)}
                    disabled={workingId === item._id}
                    style={{
                      border: "1px solid #c9a26a",
                      background: "#111",
                      color: "#fff",
                      borderRadius: 999,
                      padding: "10px 18px",
                      cursor: "pointer",
                    }}
                  >
                    {workingId === item._id && actionLabel === "approve"
                      ? "Approving..."
                      : "Approve & Forward to Broker"}
                  </button>
                  <button
                    type="button"
                    onClick={() => rejectItem(item._id)}
                    disabled={workingId === item._id}
                    style={{
                      border: "1px solid rgba(165, 42, 31, 0.2)",
                      background: "#fff4f2",
                      color: "#a52a1f",
                      borderRadius: 999,
                      padding: "10px 18px",
                      cursor: "pointer",
                    }}
                  >
                    {workingId === item._id && actionLabel === "reject"
                      ? "Rejecting..."
                      : "Reject"}
                  </button>
                </div>

                <div style={{ display: "grid", gap: 8, color: "#333" }}>
                  <div>Phone: {item.phone || "Not provided"}</div>
                  <div>Email: {item.email || "Not provided"}</div>
                  <div>Unit Type: {item.unitType || "Not specified"}</div>
                  <div>Preferred Contact: {item.contactMethod || "Not specified"}</div>
                  <div>Assigned Broker: {item?.broker?.name || "Not assigned"}</div>
                  <div>Broker Role: {item?.broker?.role || "Not assigned"}</div>
                  <div>
                    Broker Contact:{" "}
                    {item?.broker?.whatsapp || item?.broker?.phone || "Not assigned"}
                  </div>
                  <div>Page: {item.pageUrl || "Not provided"}</div>
                  <div>Created: {formatDate(item.createdAt)}</div>
                  {item.message ? <div>Message: {item.message}</div> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

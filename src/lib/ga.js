export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const isGAEnabled = () => {
  return (
    process.env.NEXT_PUBLIC_GA_ENABLED === "true" &&
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1" &&
    typeof window.gtag === "function" &&
    GA_ID
  );
};

// Track page views manually (App Router SPA)
export const pageview = (url) => {
  if (!isGAEnabled()) return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
  });
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (!isGAEnabled()) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

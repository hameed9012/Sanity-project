// // src/components/RespondWidget.jsx
// "use client";

// import Script from "next/script";
// import { useEffect } from "react";

// const RESPOND_WIDGET_SRC =
//   "https://cdn.respond.io/webchat/widget/widget.js?cId=86a0b29d022e157bd8d959654a90fc1";

// export default function RespondWidget() {
//   useEffect(() => {
//     // Optional: make helpers available globally so you can call them anywhere
//     if (typeof window === "undefined") return;

//     window.openRespondChat = () => window.$respond?.do?.("chat:open");
//     window.closeRespondChat = () => window.$respond?.do?.("chat:close");
//     window.toggleRespondChat = () => window.$respond?.do?.("chat:toggle");
//   }, []);

//   return (
//     <Script
//       id="respondio__widget"
//       src={RESPOND_WIDGET_SRC}
//       strategy="afterInteractive"
//     />
//   );
// }

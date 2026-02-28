"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/ChatDemoWidget.module.css";

export default function ChatWidget() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const [opened, setOpened] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // 🔹 Hide fake greeting on any click
  useEffect(() => {
    if (!opened || dismissed) return;

    const hideOnClick = () => setDismissed(true);
    window.addEventListener("click", hideOnClick);

    return () => window.removeEventListener("click", hideOnClick);
  }, [opened, dismissed]);

  // 🔹 Load Respond.io widget + detect open
  useEffect(() => {
    if (document.getElementById("respondio__widget")) return;

    const script = document.createElement("script");
    script.id = "respondio__widget";
    script.src =
      "https://cdn.respond.io/webchat/widget/widget.js?cId=c0e643d6ccbb7645a51f56829182448";
    script.async = true;

    document.body.appendChild(script);

    // 👇 Detect when widget iframe appears (means chat opened)
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[src*="respond.io"]');
      if (iframe) {
        setOpened(true);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* FAKE GREETING OVERLAY */}
      {opened && !dismissed && (
        <div className={styles.fakeGreeting} dir={isRTL ? "rtl" : "ltr"}>
          {isRTL ? (
            <>
              👋 <b>أهلاً وسهلاً</b>
              <br />
              هل تبحث عن شراء أو استثمار عقاري في دبي؟
              <br />
              <br />
              فقط اضغط على الدردشة للبدء 😊
            </>
          ) : (
            <>
              👋 <b>Hello!</b>
              <br />
              Looking to buy or invest in Dubai real estate?
              <br />
              <br />
              Just click the chat to get started 🙂
            </>
          )}
        </div>
      )}
    </>
  );
}

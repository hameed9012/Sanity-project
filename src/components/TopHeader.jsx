"use client";
import dynamic from "next/dynamic";

const TopHeaderClient = dynamic(() => import("./TopHeaderClient"), {
  ssr: false,
});

export default function TopHeader() {
  return <TopHeaderClient />;
}

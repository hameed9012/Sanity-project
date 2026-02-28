import dynamic from "next/dynamic";

// ✅ This kills hydration mismatch for slider forever
const HomeHeroSlider = dynamic(
  () => import("@/components/HomeHero/HomeHeroSlider"),
  {
    ssr: false,
    loading: () => (
      <div style={{ minHeight: 420, display: "grid", placeItems: "center" }}>
        Loading...
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <HomeHeroSlider />
    </>
  );
}

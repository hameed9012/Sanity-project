// "use client";

// import React, { useMemo } from "react";
// // import styles from "./CompareBar.module.css";

// import { useCompare } from "./CompareProvider";
// import { useLanguage } from "@/components/LanguageProvider";

// export default function CompareBar() {
//   const compare = useCompare();
//   const { locale } = useLanguage(); // no t()

//   const aSlug = compare.selected[0];
//   const bSlug = compare.selected[1];

//   const a = useMemo(
//     () => (aSlug ? getWhereToLiveRegionLocalized(aSlug, locale || "en") : null),
//     [aSlug, locale]
//   );
//   const b = useMemo(
//     () => (bSlug ? getWhereToLiveRegionLocalized(bSlug, locale || "en") : null),
//     [bSlug, locale]
//   );

//   if (!aSlug) return null;

//   return (
//     <div className={styles.wrap}>
//       <div className={styles.bar}>
//         <div className={styles.left}>
//           <div className={styles.title}>Compare Areas</div>

//           <div className={styles.chips}>
//             <Chip
//               name={a?.name || aSlug}
//               img={a?.heroImage}
//               onRemove={() => compare.remove(aSlug)}
//             />

//             {bSlug ? (
//               <Chip
//                 name={b?.name || bSlug}
//                 img={b?.heroImage}
//                 onRemove={() => compare.remove(bSlug)}
//               />
//             ) : (
//               <div className={styles.hint}>Pick 1 more area</div>
//             )}
//           </div>
//         </div>

//         <div className={styles.actions}>
//           <button className={styles.clearBtn} onClick={compare.clear}>
//             Clear
//           </button>

//           <button
//             className={styles.compareBtn}
//             onClick={compare.open}
//             disabled={compare.selected.length < 2}
//           >
//             Compare
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Chip({ name, img, onRemove }) {
//   return (
//     <div className={ChipStyles.chip}>
//       {img ? <img className={ChipStyles.thumb} src={img} alt={name} /> : null}

//       <span className={ChipStyles.name}>{name}</span>

//       <button
//         className={ChipStyles.remove}
//         onClick={onRemove}
//         aria-label="Remove"
//       >
//         ✕
//       </button>
//     </div>
//   );
// }

// const ChipStyles = {
//   chip: styles.chip,
//   thumb: styles.thumb,
//   name: styles.name,
//   remove: styles.remove,
// };

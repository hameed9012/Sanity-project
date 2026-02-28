// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import MainMenu from "@/components/common/MainMenu";
// import SidebarPanel from "@/components/common/sidebar-panel";
// import styles from "@/styles/add-property/DashboardHeader.module.css";

// export default function DashboardHeader() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header className={styles.header}>
//         <div className={styles.inner}>
//           <div className={styles.left}>
//             <Link className={styles.logo} href="/">
//               <Image
//                 width={138}
//                 height={44}
//                 src="/images/header-logo2.svg"
//                 alt="Header Logo"
//               />
//             </Link>

//             <button
//               className={styles.burger}
//               type="button"
//               onClick={() => setOpen(true)}
//             >
//               <Image
//                 width={25}
//                 height={9}
//                 src="/images/dark-nav-icon.svg"
//                 alt="menu"
//               />
//             </button>
//           </div>

//           <div className={styles.center}>
//             <MainMenu />
//           </div>

//           <div className={styles.right}>
//             {/* keep your icons/avatar as you want */}
//           </div>
//         </div>
//       </header>

//       {/* Drawer */}
//       <div
//         className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
//         onClick={() => setOpen(false)}
//       />
//       <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
//         <button
//           className={styles.close}
//           type="button"
//           onClick={() => setOpen(false)}
//         >
//           ×
//         </button>
//         <SidebarPanel />
//       </aside>
//     </>
//   );
// }

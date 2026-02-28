// "use client";

// import React, { useMemo, useRef, useState } from "react";
// import styles from "./AddPropertyWizard.module.css";

// const STEPS = [
//   { key: "description", label: "Description" },
//   { key: "media", label: "Media" },
//   { key: "location", label: "Location" },
//   { key: "details", label: "Details" },
//   { key: "amenities", label: "Amenities" },
//   { key: "review", label: "Review" },
// ];

// const AMENITIES = [
//   "Balcony",
//   "Pool",
//   "Gym",
//   "Parking",
//   "Security",
//   "Elevator",
//   "Sea View",
//   "Maid Room",
//   "Furnished",
//   "Pet Friendly",
// ];

// const PROPERTY_TYPES = ["Apartment", "Villa", "Townhouse", "Penthouse", "Land"];
// const STATUSES = ["Available", "Reserved", "Sold"];

// export default function AddPropertyWizard() {
//   const [stepIndex, setStepIndex] = useState(0);
//   const fileRef = useRef(null);

//   const [form, setForm] = useState({
//     title: "",
//     subtitle: "",
//     description: "",
//     type: "Apartment",
//     status: "Available",
//     price: "",
//     bedrooms: "",
//     bathrooms: "",
//     areaSqft: "",
//     city: "",
//     community: "",
//     address: "",
//     googleMapLink: "",
//     amenities: [],
//     images: [], // { id, file, previewUrl }
//   });

//   const currentStep = STEPS[stepIndex];
//   const progress = useMemo(
//     () => Math.round(((stepIndex + 1) / STEPS.length) * 100),
//     [stepIndex]
//   );

//   const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

//   const toggleAmenity = (name) => {
//     setForm((p) => {
//       const exists = p.amenities.includes(name);
//       return {
//         ...p,
//         amenities: exists
//           ? p.amenities.filter((a) => a !== name)
//           : [...p.amenities, name],
//       };
//     });
//   };

//   const onPickFiles = () => fileRef.current?.click();

//   const addFiles = (files) => {
//     const list = Array.from(files || []);
//     if (!list.length) return;

//     const mapped = list.map((file) => ({
//       id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()
//         .toString(16)
//         .slice(2)}`,
//       file,
//       previewUrl: URL.createObjectURL(file),
//     }));

//     setForm((p) => ({ ...p, images: [...p.images, ...mapped].slice(0, 12) })); // limit to 12
//   };

//   const removeImage = (id) => {
//     setForm((p) => {
//       const target = p.images.find((x) => x.id === id);
//       if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
//       return { ...p, images: p.images.filter((x) => x.id !== id) };
//     });
//   };

//   const onDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addFiles(e.dataTransfer.files);
//   };

//   const canGoNext = () => {
//     // minimal per-step validation for better UX
//     if (currentStep.key === "description")
//       return (
//         form.title.trim().length >= 3 && form.description.trim().length >= 20
//       );
//     if (currentStep.key === "media") return form.images.length >= 1;
//     if (currentStep.key === "location") return form.city.trim().length >= 2;
//     if (currentStep.key === "details")
//       return form.price !== "" && form.areaSqft !== "";
//     return true;
//   };

//   const goNext = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
//   const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

//   const onSubmit = async () => {
//     // for now frontend-only: just preview the payload
//     // later: POST to /api/projects
//     const payload = {
//       ...form,
//       images: form.images.map((x) => ({
//         name: x.file.name,
//         size: x.file.size,
//         type: x.file.type,
//       })),
//     };
//     console.log("Publish payload:", payload);
//     alert("✅ Looks good! (For now, we just logged the payload in console.)");
//   };

//   return (
//     <div className={styles.wrapper}>
//       {/* Header */}
//       <div className={styles.topBar}>
//         <div>
//           <h3 className={styles.title}>Add New Property</h3>
//           <p className={styles.subtitle}>
//             Create a polished listing with photos, details, and amenities.
//           </p>
//         </div>

//         <div className={styles.progressWrap} aria-label="Progress">
//           <div className={styles.progressMeta}>
//             <span className={styles.progressLabel}>
//               Step {stepIndex + 1} of {STEPS.length}
//             </span>
//             <span className={styles.progressValue}>{progress}%</span>
//           </div>
//           <div className={styles.progressTrack}>
//             <div
//               className={styles.progressFill}
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div
//         className={styles.tabs}
//         role="tablist"
//         aria-label="Add property steps"
//       >
//         {STEPS.map((s, idx) => {
//           const active = idx === stepIndex;
//           const done = idx < stepIndex;
//           return (
//             <button
//               key={s.key}
//               type="button"
//               className={`${styles.tab} ${active ? styles.tabActive : ""} ${
//                 done ? styles.tabDone : ""
//               }`}
//               onClick={() => setStepIndex(idx)}
//               role="tab"
//               aria-selected={active}
//             >
//               <span className={styles.tabIndex}>{done ? "✓" : idx + 1}</span>
//               <span className={styles.tabLabel}>{s.label}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Content card */}
//       <div className={styles.card}>
//         {currentStep.key === "description" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Property Description</h4>
//               <p>Make it clear, premium, and easy to scan.</p>
//             </div>

//             <div className={styles.grid2}>
//               <div className={styles.field}>
//                 <label>Title</label>
//                 <input
//                   value={form.title}
//                   onChange={(e) => setField("title", e.target.value)}
//                   placeholder="e.g., Luxury 2BR Apartment in Downtown Dubai"
//                 />
//                 <small>At least 3 characters.</small>
//               </div>

//               <div className={styles.field}>
//                 <label>Subtitle (optional)</label>
//                 <input
//                   value={form.subtitle}
//                   onChange={(e) => setField("subtitle", e.target.value)}
//                   placeholder="e.g., High floor • Full skyline view • Ready to move"
//                 />
//                 <small>Short highlight line for your listing card.</small>
//               </div>
//             </div>

//             <div className={styles.grid3}>
//               <div className={styles.field}>
//                 <label>Type</label>
//                 <select
//                   value={form.type}
//                   onChange={(e) => setField("type", e.target.value)}
//                 >
//                   {PROPERTY_TYPES.map((t) => (
//                     <option key={t} value={t}>
//                       {t}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className={styles.field}>
//                 <label>Status</label>
//                 <select
//                   value={form.status}
//                   onChange={(e) => setField("status", e.target.value)}
//                 >
//                   {STATUSES.map((s) => (
//                     <option key={s} value={s}>
//                       {s}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className={styles.field}>
//                 <label>Price (AED)</label>
//                 <input
//                   value={form.price}
//                   onChange={(e) =>
//                     setField("price", e.target.value.replace(/[^\d]/g, ""))
//                   }
//                   placeholder="e.g., 1500000"
//                   inputMode="numeric"
//                 />
//                 <small>Numbers only.</small>
//               </div>
//             </div>

//             <div className={styles.field}>
//               <label>Description</label>
//               <textarea
//                 value={form.description}
//                 onChange={(e) => setField("description", e.target.value)}
//                 placeholder="Describe the property, payment plan, view, building features, nearby landmarks..."
//                 rows={7}
//               />
//               <small>Minimum 20 characters for a strong listing.</small>
//             </div>
//           </section>
//         )}

//         {currentStep.key === "media" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Upload Photos</h4>
//               <p>Add high-quality images. Drag & drop supported.</p>
//             </div>

//             <input
//               ref={fileRef}
//               type="file"
//               accept="image/*"
//               multiple
//               className={styles.hiddenInput}
//               onChange={(e) => addFiles(e.target.files)}
//             />

//             <div
//               className={styles.dropzone}
//               onDragOver={(e) => e.preventDefault()}
//               onDrop={onDrop}
//               role="button"
//               tabIndex={0}
//               onClick={onPickFiles}
//               onKeyDown={(e) => (e.key === "Enter" ? onPickFiles() : null)}
//             >
//               <div className={styles.dropIcon}>⬆</div>
//               <div className={styles.dropText}>
//                 <strong>Click to upload</strong> or drag & drop
//                 <span>PNG / JPG — up to 12 photos</span>
//               </div>
//               <button
//                 type="button"
//                 className={styles.primaryBtn}
//                 onClick={onPickFiles}
//               >
//                 Choose files
//               </button>
//             </div>

//             {form.images.length > 0 && (
//               <div className={styles.mediaGrid}>
//                 {form.images.map((img, idx) => (
//                   <div key={img.id} className={styles.mediaItem}>
//                     <div className={styles.mediaBadge}>
//                       {idx === 0 ? "Cover" : `#${idx + 1}`}
//                     </div>
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={img.previewUrl}
//                       alt={`Upload ${idx + 1}`}
//                       className={styles.mediaImg}
//                     />
//                     <button
//                       type="button"
//                       className={styles.mediaRemove}
//                       onClick={() => removeImage(img.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {form.images.length === 0 && (
//               <div className={styles.hintBox}>
//                 Tip: Use a bright cover image (living room / view). Keep angles
//                 wide and clean.
//               </div>
//             )}
//           </section>
//         )}

//         {currentStep.key === "location" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Location</h4>
//               <p>Add location details to improve search & trust.</p>
//             </div>

//             <div className={styles.grid2}>
//               <div className={styles.field}>
//                 <label>City</label>
//                 <input
//                   value={form.city}
//                   onChange={(e) => setField("city", e.target.value)}
//                   placeholder="Dubai"
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label>Community / Area</label>
//                 <input
//                   value={form.community}
//                   onChange={(e) => setField("community", e.target.value)}
//                   placeholder="Downtown Dubai"
//                 />
//               </div>
//             </div>

//             <div className={styles.field}>
//               <label>Address (optional)</label>
//               <input
//                 value={form.address}
//                 onChange={(e) => setField("address", e.target.value)}
//                 placeholder="Building name, street, etc."
//               />
//             </div>

//             <div className={styles.field}>
//               <label>Google Maps link (optional)</label>
//               <input
//                 value={form.googleMapLink}
//                 onChange={(e) => setField("googleMapLink", e.target.value)}
//                 placeholder="https://maps.google.com/..."
//               />
//               <small>Optional for now — later you can integrate Mapbox.</small>
//             </div>
//           </section>
//         )}

//         {currentStep.key === "details" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Details</h4>
//               <p>These details appear on the listing and help filtering.</p>
//             </div>

//             <div className={styles.grid3}>
//               <div className={styles.field}>
//                 <label>Bedrooms</label>
//                 <input
//                   value={form.bedrooms}
//                   onChange={(e) =>
//                     setField("bedrooms", e.target.value.replace(/[^\d]/g, ""))
//                   }
//                   placeholder="e.g., 2"
//                   inputMode="numeric"
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label>Bathrooms</label>
//                 <input
//                   value={form.bathrooms}
//                   onChange={(e) =>
//                     setField("bathrooms", e.target.value.replace(/[^\d]/g, ""))
//                   }
//                   placeholder="e.g., 2"
//                   inputMode="numeric"
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label>Area (sqft)</label>
//                 <input
//                   value={form.areaSqft}
//                   onChange={(e) =>
//                     setField("areaSqft", e.target.value.replace(/[^\d]/g, ""))
//                   }
//                   placeholder="e.g., 1150"
//                   inputMode="numeric"
//                 />
//                 <small>Required.</small>
//               </div>
//             </div>

//             <div className={styles.hintBox}>
//               Later we can add: payment plan, handover date, ROI estimate,
//               service charges… etc.
//             </div>
//           </section>
//         )}

//         {currentStep.key === "amenities" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Amenities</h4>
//               <p>Select what applies. These show as feature chips.</p>
//             </div>

//             <div className={styles.chipGrid}>
//               {AMENITIES.map((a) => {
//                 const active = form.amenities.includes(a);
//                 return (
//                   <button
//                     key={a}
//                     type="button"
//                     className={`${styles.chip} ${
//                       active ? styles.chipActive : ""
//                     }`}
//                     onClick={() => toggleAmenity(a)}
//                   >
//                     <span className={styles.chipDot} />
//                     {a}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className={styles.hintBox}>
//               Select 3–7 top amenities. Too many can make the listing look
//               spammy.
//             </div>
//           </section>
//         )}

//         {currentStep.key === "review" && (
//           <section className={styles.section}>
//             <div className={styles.sectionHeader}>
//               <h4>Review & Publish</h4>
//               <p>Quick preview before publishing.</p>
//             </div>

//             <div className={styles.review}>
//               <div className={styles.reviewCard}>
//                 <div className={styles.reviewTop}>
//                   <div>
//                     <h5 className={styles.reviewTitle}>
//                       {form.title || "Untitled Listing"}
//                     </h5>
//                     <p className={styles.reviewSub}>{form.subtitle || "—"}</p>
//                   </div>
//                   <div className={styles.priceTag}>
//                     <span>AED</span>
//                     <strong>{form.price || "—"}</strong>
//                   </div>
//                 </div>

//                 <div className={styles.reviewMeta}>
//                   <div>
//                     <span>Type</span>
//                     <b>{form.type}</b>
//                   </div>
//                   <div>
//                     <span>Status</span>
//                     <b>{form.status}</b>
//                   </div>
//                   <div>
//                     <span>Area</span>
//                     <b>{form.areaSqft ? `${form.areaSqft} sqft` : "—"}</b>
//                   </div>
//                   <div>
//                     <span>Beds</span>
//                     <b>{form.bedrooms || "—"}</b>
//                   </div>
//                   <div>
//                     <span>Baths</span>
//                     <b>{form.bathrooms || "—"}</b>
//                   </div>
//                   <div>
//                     <span>Location</span>
//                     <b>
//                       {[form.city, form.community]
//                         .filter(Boolean)
//                         .join(" • ") || "—"}
//                     </b>
//                   </div>
//                 </div>

//                 <div className={styles.reviewDesc}>
//                   <h6>Description</h6>
//                   <p>{form.description || "—"}</p>
//                 </div>

//                 <div className={styles.reviewAmenities}>
//                   <h6>Amenities</h6>
//                   <div className={styles.amenityPills}>
//                     {form.amenities.length ? (
//                       form.amenities.map((a) => <span key={a}>{a}</span>)
//                     ) : (
//                       <i>—</i>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.reviewSide}>
//                 <div className={styles.sideCard}>
//                   <h6>Photos</h6>
//                   {form.images.length ? (
//                     <div className={styles.sidePhotos}>
//                       {form.images.slice(0, 4).map((img) => (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img key={img.id} src={img.previewUrl} alt="Preview" />
//                       ))}
//                       {form.images.length > 4 && (
//                         <div className={styles.morePhotos}>
//                           +{form.images.length - 4}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <p className={styles.muted}>No photos uploaded yet.</p>
//                   )}

//                   <div className={styles.sideTips}>
//                     <p>
//                       <b>Before publishing:</b>
//                     </p>
//                     <ul>
//                       <li>Cover photo should be bright & wide.</li>
//                       <li>
//                         Description should mention view, layout, and nearby
//                         landmarks.
//                       </li>
//                       <li>Price + area should be accurate.</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </div>

//       {/* Sticky actions */}
//       <div className={styles.actions}>
//         <div className={styles.actionsLeft}>
//           <button
//             type="button"
//             className={styles.ghostBtn}
//             onClick={goBack}
//             disabled={stepIndex === 0}
//           >
//             ← Back
//           </button>
//         </div>

//         <div className={styles.actionsRight}>
//           <button
//             type="button"
//             className={styles.secondaryBtn}
//             onClick={() => alert("Draft saved (frontend-only for now).")}
//           >
//             Save draft
//           </button>

//           {stepIndex < STEPS.length - 1 ? (
//             <button
//               type="button"
//               className={styles.primaryBtn}
//               onClick={goNext}
//               disabled={!canGoNext()}
//             >
//               Next →
//             </button>
//           ) : (
//             <button
//               type="button"
//               className={styles.primaryBtn}
//               onClick={onSubmit}
//             >
//               Publish Listing
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Small validation note */}
//       {!canGoNext() && stepIndex < STEPS.length - 1 && (
//         <div className={styles.validationNote}>
//           Please complete the required fields to continue.
//         </div>
//       )}
//     </div>
//   );
// }

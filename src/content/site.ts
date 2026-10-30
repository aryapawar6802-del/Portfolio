export const site = {
  name: "Arya Pawar",
  role: "Product Designer",
  /** Hero statement, and the site's meta description. */
  headline: "Designing B2B tools for teams that work in data.",
  /** The hero sets the headline on these two lines. */
  headlineLines: ["Designing B2B tools for teams", "that work in data."],
  /** Hero facts. Companies are named but not linked. */
  currently: "MathCo",
  previously: "Monsoonfish",
  experience: "2.5+ years",
  /** Non-breaking hyphen, so MIT‑WPU never splits across lines. */
  education: { degree: "B.Des in UX Design", school: "MIT‑WPU" },
  email: "arya.pawar6802@gmail.com",
  /** Shown spaced for reading; the tel: link uses the bare digits. */
  phone: { display: "+91 93256 87824", href: "tel:+919325687824" },
  resumeHref: "#",
  /** Domains, not client names — the work sits under NDA. */
  domains: ["CPG", "Retail", "Pharma"],
};

/** Top nav. The glyph is decorative — labels carry the meaning. */
export const nav = [
  { label: "Work", href: "/", glyph: "◆" },
  { label: "About", href: "/about", glyph: "☺" },
];

// Where the API lives. In production the app and the API share one domain
// (the web server proxies /api to the backend), so the default is a relative
// URL. In development it is the local backend. Set VITE_API_URL to point the
// app at an API on another host.
const API_BASE: string = (
  import.meta.env.VITE_API_URL ??
  (import.meta.env.PROD ? "" : "http://localhost:8080")
).replace(/\/$/, "");

export const USER_API_ENDPOINT = `${API_BASE}/api/auth/user`;

export const JOB_API_ENDPOINT = `${API_BASE}/api/job`;

export const APPLICATION_API_ENDPOINT = `${API_BASE}/api/application`;

export const COMPANY_API_ENDPOINT = `${API_BASE}/api/v1`;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/mdirfan2470/",
  x: "https://github.com/workmdirfan29",
  instagram: "https://www.instagram.com/sahil__ik",
};

export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
  "Temporary",
];

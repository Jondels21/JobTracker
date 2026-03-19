export type ApplicationStatus =
  | "WISHLIST"
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED";

export type Application = {
  id: string;
  company: string;
  role: string;
  location: string;
  status: ApplicationStatus;
  appliedAt: string;
};

export const applications: Application[] = [
  {
    id: "1",
    company: "Nokia",
    role: "Software Engineer",
    location: "Espoo",
    status: "APPLIED",
    appliedAt: "2026-03-10",
  },
  {
    id: "2",
    company: "Supercell",
    role: "Frontend Developer",
    location: "Helsinki",
    status: "INTERVIEW",
    appliedAt: "2026-03-05",
  },
  {
    id: "3",
    company: "Wolt",
    role: "Full Stack Developer",
    location: "Helsinki",
    status: "WISHLIST",
    appliedAt: "2026-03-15",
  },
  {
    id: "4",
    company: "Kone",
    role: "Backend Developer",
    location: "Hyvinkää",
    status: "REJECTED",
    appliedAt: "2026-02-28",
  },
  {
    id: "5",
    company: "Reaktor",
    role: "Junior Software Developer",
    location: "Helsinki",
    status: "OFFER",
    appliedAt: "2026-03-01",
  },
];
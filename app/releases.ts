export type Release = {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: string[];
};

export const releases: Release[] = [
  {
    version: "Version 1.0 — Pilot",
    date: "Coming soon",
    title: "The first complete OG Vibes student release",
    summary:
      "The pilot release brings the most important academic, communication and campus tools into one student app.",
    changes: [
      "A polished student experience with clearer navigation and faster access to chats.",
      "Module-based slides, past papers, quizzes, assessments, ICASS and online classes.",
      "Official alerts and a separate notification centre with useful previews.",
      "Improved private and module group conversations, attachments and call history.",
      "Better offline access, upload feedback and accessibility across key screens.",
    ],
  },
  {
    version: "Version 0.9 — Preview",
    date: "August 2026",
    title: "Production preview and reliability update",
    summary:
      "This preview focused on making the student app dependable enough for real campus testing.",
    changes: [
      "Improved offline access for academic content, profiles, friends and campus information.",
      "More useful notification previews for messages, alerts, assessments and academic resources.",
      "Better chat delivery, attachment retry, incoming-call handling and call history.",
      "Profile pictures and nicknames displayed more consistently throughout the app.",
    ],
  },
];

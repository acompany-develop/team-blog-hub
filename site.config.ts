export const config = {
  siteMeta: {
    title: "Acompany Team Blog Hub",
    teamName: "Acompany Inc.",
    description: "Acompanyメンバーのブログを集約したサイトです",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://acompany.tech/",
    },
    {
      title: "Recruit",
      href: "https://recruit.acompany.tech/",
    },
  ],
};

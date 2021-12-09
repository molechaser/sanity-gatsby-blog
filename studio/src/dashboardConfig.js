export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b2397640db7c940e48a54a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uefqd4a2",
                  apiId: "3d3d7b6a-01d6-4d5f-8bb8-4a846f37d65c",
                },
                {
                  buildHookId: "61b23976b8fb37b0fe1490eb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dzfho83o",
                  apiId: "b4329855-93db-4e59-aed3-dd2591099e9c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/molechaser/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dzfho83o.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

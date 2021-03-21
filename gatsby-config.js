module.exports = {
  siteMetadata: {
    title: `Brad's Site`,
    name: `Brad's Site`,
    siteUrl: `https://bradleycamacho.com`,
    description: `Bradley Camacho's personal website for random writings and projects.`,
    hero: {
      heading: `Brad's random writing and projects`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/bradleyrcamacho`,
      },
      {
        name: `github`,
        url: `https://github.com/bradleycamacho`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/bradleyrcamacho`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/bradley-camacho/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

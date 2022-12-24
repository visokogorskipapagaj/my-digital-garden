module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        extensions: ['.mdx', '.md']
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Moio Documentation`,
  },
}

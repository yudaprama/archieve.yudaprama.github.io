/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const iosTemplate = path.resolve("src/templates/ios.js")

  return graphql(`
    query {
      allAppStoreJson {
        nodes {
          bundleId
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allAppStoreJson.nodes.forEach((node) => {
      createPage({
        path: `/works/${node.bundleId.replace(/\./g, "-")}`,
        component: iosTemplate,
        context: {
          id: node.bundleId
        },
      })
    })
  })
}

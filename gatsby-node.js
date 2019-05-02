/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allAppStoreJson {
        nodes {
          bundleId
        }
      }
      allPlayStoreJson {
        nodes {
          appId
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
        component: path.resolve("src/templates/ios.js"),
        context: {
          id: node.bundleId
        },
      })
    })

    result.data.allPlayStoreJson.nodes.forEach((node) => {
      createPage({
        path: `/works/${node.appId.replace(/\./g, "-")}`,
        component: path.resolve("src/templates/android.js"),
        context: {
          id: node.appId
        },
      })
    })
  })
}

// ! , orderBy: {field: PUSHED_AT, direction: DESC}
// Cool users:
// mitchellh
// wojtekmaj
// motdotla

const githubQuery = (
  pageCount, 
  queryString, 
  paginationKeyword, 
  paginationString
) => {
  return {
    query: `
    {
      viewer {
        name
      }
      search(query: "${queryString} user:Redth sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                spdxId
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,
  };
};

export default githubQuery;
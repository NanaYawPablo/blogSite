//GraphQL import
import { gql } from '@apollo/client'


/* -------------    GET QUERIES  ----------------    */
export const ALL_POSTS_COUNT = gql` 
query {
  postsConnection{
    aggregate {
      # count
      totalCount
      
    }
  }
}
`

export const PAGINATED_POSTS = gql`
# Getting all posts and sorting by 'published_at' desc
query GetAllPostsViaPagination(
  # $start: Int!, 
  $limit: Int!){
  postsConnection(
    # start:$start
    limit: $limit
     sort:"published_at:desc" ) {

    aggregate {
      # count
      totalCount 
    }

    values{ 
       id
    title
    description
    published_at
    image{
    		url
    }
    authors{
      name
			avatar{
				  url
      }
    }
    categories{
	    id
      name
    }
    }
  }
}
`;

// export const PAGINATED_POSTS = gql`
// # Getting all posts and sorting by 'published_at' desc
// query GetAllPostsViaPagination($start: Int!, $limit: Int!){
//   posts(start: $start
//     limit: $limit
//     # sort:"published_at:desc" 
//     ){
//     id
//     title
//     description
//     published_at
//     image{
//     		url
//     }
//     authors{
//       name
// 			avatar{
// 				  url
//       }
//     }
//     categories{
// 	    id
//       name
//     }
//   }
// }
// `;

export const ALL_POSTS = gql`
# Getting all posts and sorting by 'published_at' desc
query GetAllPosts{
  posts(sort:"published_at:desc" ){
    id
    title
    description
    published_at
    image{
    		url
    }
    authors{
      name
			avatar{
				  url
      }
    }
    categories{
	    id
      name
    }
  }
}
`;

export const LATEST_POSTS = gql`
# Getting latest two posts and sorting by published_at desc
query GetLatestPosts{
  posts(limit:2 sort:"published_at:desc" ){
    id
    title
    description
    published_at
    image{
            url
    }
    authors{
      name
            avatar{
                  url
      }
    }
    categories{
      id
      name
    }
  }
}
`;

export const ALL_CATEGORIES = gql`
  # Getting all categories and sorting by name asc
  query GetAllCategories {
    categories(sort: "name:asc") {
      id
      name
    }
  }
`;


/* -------------   GET QUERIES WITH QUERY VARIABLES  ----------------    */

export const GET_SINGLE_POST = gql` 
# Getting single post
query GetSinglePost($blogID: ID!){ #for other variable types=> $variableName: String! , $variableName: Int! etc.
  post(id: $blogID) {
    id
    title
    description
    content
    published_at
    image {
      url
    }
    authors {
      id
      name
      avatar {
        url
      }
    }
    categories {
      id
      name
    }
  }
}
`;

export const GET_CATEGORY_DETAILS = gql`
# Getting selected category details and sorting posts by published_at desc

query GetCategoryDetails($categoryID : ID!){
  category(id:$categoryID) {
    id
    name
       posts(sort:"published_at:desc"){
           id
           title
           published_at
           description
           image{
                 url
                }
                categories{
                  id
                  name
                }
            }
  }
}
`;

export const GET_PAGINATED_CATEGORY_DETAILS = gql`
# Getting selected category details, adding limit, and sorting posts by published_at desc 

query GetPaginatedCategoryDetails($categoryID : ID!, $limit: Int!){
  category(id:$categoryID) {
    id
    name
       posts(limit:$limit 
        sort:"published_at:desc"){
           id
           title
           published_at
           description
           image{
                 url
                }
                categories{
                  id
                  name
                }
            }
  }
}
`;

export const PAGINATED_CATEGORYS_POSTS= gql`
#Get all posts under a particular category and Count of posts in that category

query categorysPost($categoryID : ID!, $limit: Int!) {
  postsConnection(
    limit: $limit
    where:{categories: $categoryID}
    sort: "published_at:desc"
  ) {
    aggregate {
      count
      #totalCount #totalCount of all posts regardless of their categories
    }

    values {
      id
      title
      description
      published_at
      image {
        url
      }
      categories {
        id
        name
      }
    }
  }
}
`;

export const CATEGORY_NAME= gql`
query getCategoryName($categoryID : ID!){
  category(id:$categoryID){
    name
  }
}
`;


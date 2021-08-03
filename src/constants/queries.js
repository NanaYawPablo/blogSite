//GraphQL import
import { gql } from '@apollo/client'


/* -------------    GET QUERIES  ----------------    */

export const ALL_POSTS = gql`
# Getting all posts and sorting by id desc
query GetAllPosts{
  posts(sort:"id:desc" ){
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
# Getting latest two posts and sorting by id desc
query GetLatestPosts{
  posts(limit:2 sort:"id:desc" ){
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
# Getting selected category details and sorting posts by id desc

query GetCategoryDetails($categoryID : ID!){
  category(id:$categoryID) {
    id
    name
       posts(sort:"id:desc"){
           id
           title
           published_at
           description
           image{
                 url
                }
            }
  }
}
`;

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
    slug
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
  posts(limit:3 sort:"published_at:desc" ){
    id
    title
    slug
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
      slug
    }
  }
`;



/* -------------   GET QUERIES WITH QUERY VARIABLES  ----------------    */

export const GET_SINGLE_POST = gql` 
# Getting single post
query GetSinglePost($blogSlug: String!){ #for other variable types=> $variableName: ID! , $variableName: String! , $variableName: Int! etc.
  postBySlug(slug: $blogSlug) {
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
      slug
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


export const PAGINATED_CATEGORYS_POSTS = gql`
#Get all posts under a particular category and Count of posts in that category

query categorysPost($categorySlug : String!, $limit: Int!) {
  
  postsConnection(
    limit: $limit
    where: {categories: {slug: $categorySlug} } #double layer json to point to category.SLUG
    # where: {categories: $categoryID}
    sort: "published_at:desc"
  ) {

    aggregate {
      count
      #totalCount #totalCount of all posts regardless of their categories
    }

    values {
      id
      title
      slug
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


export const CATEGORY_NAME = gql`
query getCategoryName($categorySlug: String!){
  categoryBySlug(slug: $categorySlug){
    name
  }  
}
`;

export const GET_RELATED_POSTS = gql`
# Getting related posts via category slug and sorting posts by published_at desc
#limit is 3 posts

query getRelatedPosts($categorySlug: String!, $blogID: ID!){
  categoryBySlug(slug: $categorySlug){
    # name
    # id
    slug
    posts(
      sort:"published_at:desc"
      limit:3
      where:{id_ne:$blogID} #dont include the selected postID
    ){
      id
      title
      slug
      description
      published_at
    }
  }  
}
`;

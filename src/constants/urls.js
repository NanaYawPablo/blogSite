//frontend urls
export const HOMEPAGE_URL = "/";
export const ABOUT_URL = "/about";
export const BLOGS_URL = '/blogs'
export const CATEGORY_URL = "/categories/:slug";
export const BLOG_URL = "/blogs/:slug"; 
export const PAGE404_URL = "/page-not-found"; 
// export const BLOG_URL = "/blogs/:id/:title"; //following stackOverflow's url format

//backend urls
export const BACKEND_URL = 'http://localhost:1337'
export const BACKEND_POSTS_URL = BACKEND_URL + '/posts'
export const BACKEND_CATEGORIES_URL = BACKEND_URL + '/categories'
export const GRAPHQL_SERVER_ENTRYPOINT= BACKEND_URL+'/graphql'



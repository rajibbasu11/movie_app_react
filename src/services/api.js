const API_KEY = "6de9a9be8e863751dede5796ba056e2b"
// const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGU5YTliZThlODYzNzUxZGVkZTU3OTZiYTA1NmUyYiIsIm5iZiI6MTczNzk3NDE3MC4wODMwMDAyLCJzdWIiOiI2Nzk3NjE5YWM3YjAxYjcyYzcyNDA2MzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dxJ1YQvOrmFrqo2PAIuYIAHxGmRQ9abv5Ya093WCYsQ"
const BASE_URL = "https://api.themoviedb.org/3"


export async function getPopularMovies () {
    let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    let data = await response.json() 
    return data.results
}


export async function searchMovies (query) {
    let response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${decodeURIComponent(query)}`)
    let data = await response.json();
    return data.results;
}
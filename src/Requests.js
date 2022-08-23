const key = 'a57ff20ff1c10e8fe70d065bfa6c458c';
const apiReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTdmZjIwZmYxYzEwZThmZTcwZDA2NWJmYTZjNDU4YyIsInN1YiI6IjYzMDRjMTUzZTg2MDE3MDA4MThlODVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eb4v1hGvm-dYSPWgDt_pzlmrv-u2ZwAXdQ1j0R2hmVI';
const requests= {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}
export default requests;
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5ce997914f5a7ef9b43a7154ab91faf3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
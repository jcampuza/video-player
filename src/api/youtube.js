const API_KEY = 'AIzaSyCFPN9fLE8jm2xZDnsuuIuhiK6_qabwQ84';


class YoutubeApi {
    constructor() {
        this.API_KEY = API_KEY;
        this.baseUrl = 'https://www.googleapis.com/youtube/v3';
    }

    /**
     * Performs a search for a list of Youtube Content
     * @param {String} GetList - term to be searched for
     * @return {Promise}
     */
    getList(searchTerm) {
        const searchEncoded = encodeURIComponent(searchTerm);
        let url = `${this.baseUrl}/search?part=snippet&q=${searchEncoded}&maxResults=10&type=video&key=${this.API_KEY}`;
        return fetch(url)
            .then(response => response.json())
            .then(data => data.items);
    }
}

export default new YoutubeApi();
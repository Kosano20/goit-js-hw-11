import axios from "axios"

export default class PicturesApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1
    }

    async fetchPictures() {
        console.log(this);

        const BASE_URL = `https://pixabay.com/api/?key=23383407-e7cc8d35786a3d378c61a119c&q=${this.searchQuery}&per_page=40&page=${this.page}&image_type=photo&orientation=horizontal&safesearch=true`

        const response = await axios.get(BASE_URL)
        this.page += 1
        return response.data

    }

    resetPage() {
        this.page = 1
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}

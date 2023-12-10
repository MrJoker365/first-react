import axios from "axios";

export default class PostService {
    static async getAll(){

        try { // на рівні сервісу відловлювати помилку не зовсім добре...
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return response.data
        }catch (e) {
            console.log(e)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return response.data // я здублював сюди код, бо цю помилку перехоплює useFetchingHook.js та App.js
                                // інакше код би поламався
        }

    }
}
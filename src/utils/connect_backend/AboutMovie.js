import axios from 'axios'


export {
    AboutMovie
}

class AboutMovie {

    function getAllmovies() {
        axios.get("Movie").then(response => {
            return response.data.data;
        })
    }

    function getOnemovie($id) {
        axios.get(`Movie/${id}`).then(response => {
            return response.data.data;
        })
    }
}
 
import axios from 'axios'


export {
    AboutSovenir
}

class AboutSovenir {

    function getAllSovenirs() {
        axios.get("Sovenir").then(response => {
            return response.data.data;
        })
    }

    function getOnesovenirs($id) {
        axios.get(`Sovenir/${id}`).then(response => {
            return response.data.data;
        })
    }
}
 
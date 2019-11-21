import axios from 'axios'


export {
    AboutUser
}

class AboutUser {

    function getAllusers() {
        axios.get("User").then(response => {
            return response.data.data;
        })
    }

    function getOneuser($id) {
        axios.get(`User/${id}`).then(response => {
            return response.data.data;
        })
    }
}
 
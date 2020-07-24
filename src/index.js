import axios from "axios";

class Instagram {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.instance = axios.create({
            baseURL: "https://graph.instagram.com"
        });
    }

    mediaEdge(fields) {
        return this.instance.get("/me/media", {
            params: {
                fields: fields.toString(),
                access_token: this.accessToken
            }
        })
            .then(res => Promise.resolve(res.data.data));
    }
}

export default Instagram;
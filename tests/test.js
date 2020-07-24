import Instagram from "../src/index"

const instagram = new Instagram("ACCESS_TOKEN");

instagram.mediaEdge(["id"])
    .then(media => console.log(media))
    .catch(error => console.log(error));
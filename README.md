# Dylate Instagram JS

This is Dylate's javascript library to make calls to the Instagram API.

## Installation

```bash
npm i dylate-instagram-js
```

## Usage

```js
import Instagram from "dylate-instagram-js"

const instagram = new Instagram("ACCESS_TOKEN");

instagram.mediaEdge(['id','caption'])
    .then((data) => {
        /*
          [
            {
              "id": "17895695668004550",
              "caption": ""
            },
            ...
          ]
        */
    });
```
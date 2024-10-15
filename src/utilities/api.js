// import { createApi } from 'unsplash-js';
// import nodeFetch from 'node-fetch';

// const unsplash = createApi({
//   accessKey: '47B89y2XRs3fQoc0JzVnh69pxZhWFm0QHqZyFQIBUBY',
//   fetch: nodeFetch,
// });

// export const Photo = (id) => unsplash.photos.get({ photoId: id }).then(result => {
//     if (result.errors) {
//       // handle error here
//       console.log('error occurred: ', result.errors[0]);
//       return null;
//     } else {
//       // handle success here
//       const photo = result.response;
//       return photo;
//     }
// });
const API_HOST = "https://api.unsplash.com/photos"

export const GetPhotos = async (page, perpage) => {
    const res = await (
        await fetch(`${API_HOST}?client_id=47B89y2XRs3fQoc0JzVnh69pxZhWFm0QHqZyFQIBUBY&page=${page}&per_page=${perpage}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": "47B89y2XRs3fQoc0JzVnh69pxZhWFm0QHqZyFQIBUBY",
                "Accept-Version": "v1",
            },
        })
    ).json();
    return res; 
}

export const GetPhoto = async (id) => {
    try {
        const res = await fetch(`${API_HOST}/${id}?client_id=47B89y2XRs3fQoc0JzVnh69pxZhWFm0QHqZyFQIBUBY`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "47B89y2XRs3fQoc0JzVnh69pxZhWFm0QHqZyFQIBUBY",
                    "Accept-Version": "v1",
                },
            })
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);            
        }

        const json = await res.json();        
        return json;         
    } catch (error) {        
        throw(error);
    }
}


import fetch from '../../node_modules/isomorphic-fetch'

export function createBlogPost(data){
    return fetch('https://www.api.fastbuy.by/kiosk/api/v1/auth/login',{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res =>{
        return res;
    }).catch(err=>err);
}
import fetch from 'node-fetch';

export function authorize(username, password) {
    console.log(username, password)
    return fetch('http://localhost/reactserver/login.php')
        .then((res) => {
            console.log()
            return res.json()
        })
        .then((resJson) => {
            console.log("Api:authorize:resjson::");
            console.log(resJson);
            return resJson.token
        })
        .catch((e) => {
            console.log("Api:authorize:error::");
            console.error(e.message);
            return e.message;
        });
}
export function storeItem({ token }) {
    console.log("Api/storeItem::", token);
}
export function clearItem(token) {
    console.log("Api/clearItem::", token);
}

const API = ({
    authorize,
    storeItem,
    clearItem
})
export default API;
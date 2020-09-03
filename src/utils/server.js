const URL = "http://localhost:8080";

export function get(url) {
    return new Promise((resolve, reject) => {
        fetch(getFullUrl(url))
        .then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    resolve(json);
                });
            } else {
                reject(response);
            }
        }).catch((e) => {
            reject(e);
        })
    });
}

export function put(url, data) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return new Promise((resolve, reject) => {
        fetch(getFullUrl(url), {
            method: "PUT",
            body: JSON.stringify(data),
            headers: headers
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    resolve(json);
                });
            } else {
                reject(response);
            }
        }).catch((e) => {
            reject(e);
        })
    });
}

function getFullUrl(relativeUrl) {
    return URL + relativeUrl;
}
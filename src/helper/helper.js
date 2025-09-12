
export const postRequest = async (url, data) => {
    const baseURL = 'http://127.0.0.1:8787';
    const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
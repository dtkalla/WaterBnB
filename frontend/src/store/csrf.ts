export function storeCSRFToken(response) {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
export async function restoreCSRF() {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    return response;
}


const csrfFetch = async (url, options={}) => {
    options.headers ||= {}
    options.method ||= 'GET'

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] ||= 'application/json'
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
    }

    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}


export default csrfFetch;
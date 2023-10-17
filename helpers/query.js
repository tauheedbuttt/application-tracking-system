export const queryToObject = (str) => {
    // key=value&key=value
    const keys = str.split("&");
    const obj = {};
    keys.forEach((item) => {
        obj[item.split("=")[0]] = item.split("=")[1]?.replaceAll('+', ' ');
    });
    return obj;
};

export const objToQuery = (obj) => {
    return Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
};
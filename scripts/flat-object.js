
export function flattenObject(obj) {
    const object = Object.create(null);
    const path = [];
    const isObject = (value) => Object(value) === value;

    function dig(obj) {
        for (let [key, value] of Object.entries(obj)) {
            path.push(key);
            if (isObject(value)) dig(value);
            else object[path.join('.')] = value;
            path.pop();
        }
    }

    dig(obj);
    return object;
}
export default flattenObject
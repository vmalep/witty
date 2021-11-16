/**
 * Decodes special characters like &#039
 * @param {string} string 
 * @returns {string}
 */
function DecodeSpecialChar(string) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!doctype html><body>${string}`, 'text/html').body.textContent;
    /* console.log(decodedString); */
    return decodedString
}

export default DecodeSpecialChar
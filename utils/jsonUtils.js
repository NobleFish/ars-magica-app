const LZString = require('lz-string');

function compressJSON(jsonObj) {
    const jsonString = JSON.stringify(jsonObj);
    const compressedString = LZString.compressToBase64(jsonString);
    return compressedString;
}

function uncompressJSON(compressedString) {
    const jsonString = LZString.decompressFromBase64(compressedString);
    const jsonObj = JSON.parse(jsonString);
    return jsonObj;
}

module.exports = {
    compressJSON,
    uncompressJSON
};


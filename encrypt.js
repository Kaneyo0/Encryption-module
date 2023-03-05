const crypto = require('crypto');

exports.encrypt = function (data) {
    return crypto.createHash("sha1").update(data, "binary").digest("hex")
}

exports.compareEncryption = function (data, dataCrypt) {
    return this.sha1(data) === dataCrypt
}

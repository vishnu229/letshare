const uuid = function(){
    var d = new Date().getTime();
    var uuid = 'xxyx-xyxx-4xxy-yxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

var crypto = require('crypto');

/**
 * Return a unique identifier with the given `len`.
 *
 * utils.uid(10);
 * // => "FDaS435D2z"
 *
 * @param {Number} howMany
 * @param {String} character-set to be used for generation.
 * @return {String}
 * @api private
 */

const uid = function random(howMany, chars) {
    chars = chars ||
        "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    var rnd = crypto.randomBytes(howMany),
        value = new Array(howMany),
        len = chars.length;
    for (var i = 0; i < howMany; i++) {
        value[i] = chars[rnd[i] % len];
    }
    return value.join('');
};

module.exports = {
    uuid: uuid,
    uid: uid
};
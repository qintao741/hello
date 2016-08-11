let CommonTools = {
    empty(obj) {
        switch (typeof obj) {
            case 'undefined':
                return true;
            case 'string':
                return obj === undefined || obj.trim() === '';
            case 'object':
                return obj === null || Object.keys(obj).length === 0;
            default:
                return false;
        }
    },

    toNum(val) {
        if (val === undefined) return 0;
        if (/^\d+(\.\d+)?$/.test(val)) {
            return parseFloat(val);
        } else {
            return 0;
        }
    },

    randomString() {
        var x = 2147483648;
        return Math.floor(Math.random() * x).toString(36) +
            Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
    }
};

export default CommonTools;

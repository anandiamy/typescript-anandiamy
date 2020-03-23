var Str = /** @class */ (function () {
    function Str() {
    }
    Str.lower = function (value) {
        return value.toLowerCase();
    };
    Str.upper = function (value) {
        return value.toUpperCase();
    };
    Str.capitalize = function (value) {
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    Str.reverse = function (value) {
        return value.split('').reverse().join('');
    };
    Str.contains = function (value, search) {
        if (typeof search === "string") {
            return value.split(' ').indexOf(search) > -1;
        }
        for (var _i = 0, search_1 = search; _i < search_1.length; _i++) {
            var item = search_1[_i];
            if (value.split(' ').indexOf(item) > -1) {
                return true;
            }
        }
        return false;
    };
    return Str;
}());
console.log(Str.lower('MAKAN'));
console.log(Str.upper('malam'));
console.log(Str.capitalize('saya ingin makan'));
console.log(Str.reverse('kasur'));
console.log(Str.contains('Saya ingin makan sate', 'makan'));
console.log(Str.contains('Saya ingin makan sate', 'rujak'));
console.log(Str.contains('Saya ingin makan sate', ['sate', 'rujak']));

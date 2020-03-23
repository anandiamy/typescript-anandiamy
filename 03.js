function convertToRupiah(angka) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0)
            rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}
function convertCsvToObject(csv) {
    var perLine = csv.split('\n');
    perLine.splice(0, 1);
    var obj = [];
    for (var _i = 0, perLine_1 = perLine; _i < perLine_1.length; _i++) {
        var value = perLine_1[_i];
        var splitted = value.split(', ');
        obj.push({
            'name': splitted[0],
            'price': convertToRupiah(splitted[2]),
            'category': splitted[1]
        });
    }
    return obj;
}
var csv = "NAME, CATEGORY, PRICE\nXiaomi Redmi 5A, Smartphone, 1199000\nMacbook Air, Laptop, 13775000\nSamsung Galaxy J7, Smartphone, 3549000\nDELL XPS 13, Laptop, 26799000\nXiaomi Mi 6, Smartphone, 5399000\nLG V30 Plus, Smartphone, 10499000";
console.log(convertCsvToObject(csv));

function convertToRupiah(angka): String {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}

function convertCsvToObject(csv: string) {
    let perLine = csv.split('\n');
    perLine.splice(0, 1);

    let obj = [];
    for (let value of perLine) {
        let splitted = value.split(', ');
        obj.push({
            'name': splitted[0],
            'price': convertToRupiah(splitted[2]),
            'category': splitted[1]
        })
    }

    return obj
}

let csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;


console.log(convertCsvToObject(csv));

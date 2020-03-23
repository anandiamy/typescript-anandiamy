function range(start, end) {
    var ans = [];
    for (var i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
function leapDetector(firstYear, secondYear) {
    var yearArray = range(firstYear, secondYear);
    var yearLeaps = [];
    for (var _i = 0, yearArray_1 = yearArray; _i < yearArray_1.length; _i++) {
        var year = yearArray_1[_i];
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            yearLeaps.push(year);
        }
    }
    return yearLeaps;
}
console.log(leapDetector(2007, 2020));

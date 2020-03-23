function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function leapDetector(firstYear: number, secondYear: number): Array<number> {
    let yearArray = range(firstYear, secondYear);
    let yearLeaps = [];

    for (let year of yearArray) {
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            yearLeaps.push(year);
        }
    }

    return yearLeaps;
}

console.log(leapDetector(2007, 2020));

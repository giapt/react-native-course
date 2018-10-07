var arr = [1,2,[3,4,[5,6,[7,8],9]]];

function getAllNumber(array) {
    var reduced = array.reduce(function(filtered, item) {
        if (Number.isInteger(item)) {
            filtered.push(item);
        }
        if (Array.isArray(item)) {
            var new_array = getAllNumber(item);
            filtered = filtered.concat(new_array);
        }
        return filtered;
    }, []);
    return reduced;
}
let new_array = getAllNumber(arr);
console.log("new array ", new_array)
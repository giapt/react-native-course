const students = [
    {
        'id' :1,
        'name' : 'hoang',
        'status' : true
    },
    {
        'id' :2,
        'name' : 'minh',
        'status' : false
    },
    {
        'id' : 3,
        'name' : 'trung',
        'status' : true
    }
]

function getListName() {
    let array = students.map(student => {
        return student.name;
    });
    console.log("new array", array);
}
function getListNameWithCondition(){
    //with filter
    let array = students
    .filter(student => {
        return student.status == true;
    });
    console.log("new array", array);
    
    //with reduce
    var reduced = students.reduce(function(filtered, student) {
        if (student.status) {
           filtered.push(student.name);
        }
        return filtered;
    }, []);
    console.log("new array 2", reduced);
}
getListNameWithCondition();
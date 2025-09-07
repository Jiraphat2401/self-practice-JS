const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
 
function getPassingNames(studentList){
    return studentList.filter(student => student.score >= 70).map(student => student.name.toUpperCase())
}
 
const passingNames = getPassingNames(studentScores)
console.log(passingNames);

//check array type
console.log(Array.isArray([]))
console.log(Array.isArray([1, true]))
console.log(Array.isArray("[]"))
//merge string
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
//convert to string
console.log(array3.toString())

const array14 = [1,30,4,21,10000]
array14.sort((a,b)=> a - b)
console.log(array14)

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
 

const sorted = (na) =>{
    const names = na.map(na => na.name)
    const sortname = names.sort()
    return sortname
}
console.log(sorted(stds))
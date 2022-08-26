//Javascript con ES6 <
//Due Aug 26, 2022
//Dados los siguientes arreglos de objetos completas la misión:

const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
]

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
]

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 }
]

  //  Imprimir los cursos y los estudiantes de cada curso con el siguiente format:
/*
- JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez
*/
  //  Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
/*
- Pedro Perez
  * JavaScript I
  * HTML y CSS I
- Maria Gomez
  * HTML y CSS I
*/

console.log(enrollments)

const printCourse = (courses,students,enrollments) => {

    courses.map( course =>{
        let c_id = course._id
        let c_name = course.title
        console.log(c_name)
        students.map(student =>{
            let s_id = student._id
            let s_name = student.name
            enrollments.map(enrollment=>{
                let course_id = enrollment.course_id
                let student_id = enrollment.student_id

                if(course_id ===c_id && s_id=== student_id){
                    console.log(s_name)
                }
            })
        })
    })
  
}
printCourse(courses,students,enrollments);
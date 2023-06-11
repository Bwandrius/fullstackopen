import Course from "./Course"

const Content = ({ courses }) => {
    return (
        <>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </>
    )
}

export default Content
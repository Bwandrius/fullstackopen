import Header from "./Header"
import Part from "./Part"

const Course = ({ course }) => {
    const parts = course.parts
    
    return (
        <>
            <Header course={course.name} />
            {parts.map(part => <Part key={part.id} part={part} /> )}  
        </>
    )
}

export default Course
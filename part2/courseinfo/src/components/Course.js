import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const Course = ({ course }) => {
    const parts = course.parts
    
    return (
        <div>
            <Header course={course.name} />
            {parts.map(part => <Part key={part.id} part={part} /> )}
            <Total parts={parts} />  
        </div>
    )
}

export default Course
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content content={course.parts} />
            <Total part={course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>
            {props.course.name}
        </h1>
    )
}

const Content = (props) => {

    return (
        <div>
            <Part part={props.content[0]} />
            <Part part={props.content[1]} />
            <Part part={props.content[2]} />
        </div>
    )
}

const Total = (props) => {

    const sum = props.part.reduce((sum, b) => {
        return sum += b.exercises;
    }, 0)

    return (
        <p>
            Number of exercises {sum}
        </p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
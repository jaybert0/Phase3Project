function ProblemCard({key, difficulty, location, technique, grip_color, end_date, problem_description}){
    return(
        <div key = {key}>
            <h1>Difficulty: {difficulty}</h1>
            <h1>Location {location}</h1>
            <h1>Technique: {technique}</h1>
            <h1>Grip Color: {grip_color}</h1>
            <h1>End Date: {end_date}</h1>
            <h1>Problem Description: {problem_description}</h1>
            <button>Fav Button</button> <button>In Progress</button> <button>Completed</button>
            <br></br>
            <input type="text"></input> <button>Submit</button>
        </div>
    );
}

export default ProblemCard
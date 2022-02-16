function ProblemCard({problem}){
    return(
        <div>
            <h1>Difficulty: {problem[0].difficulty}</h1>
            <h1>Location {problem[0].location}</h1>
            <h1>Technique: {problem[0].technique}</h1>
            <h1>Grip Color: {problem[0].grip_color}</h1>
            <h1>End Date: {problem[0].end_date}</h1>
            <h1>Problem Description: {problem[0].problem_description}</h1>
            <button>Fav Button</button> <button>In Progress</button> <button>Completed</button>
            <br></br>
            <input type="text"></input> <button>Submit</button>
        </div>
    );
}

export default ProblemCard
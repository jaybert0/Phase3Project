import ProblemCard from './ProblemCard'
function ClimberHome({problem, climbproblem}){
    // console.log(problem[0].difficulty)
    // console.log(climbproblem[0])
    return(
        
        <div>
            {problem.map(problem => (
                <ProblemCard 
                key={problem.id} 
                difficulty={problem.difficulty}
                location={problem.location}
                technique={problem.technique}
                grip_color={problem.grip_color}
                end_date={problem.end_date}
                problem_description={problem.problem_description}
                />
            ))}
        </div>
        
    );
}

export default ClimberHome
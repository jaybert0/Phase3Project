import ProblemCard from './ProblemCard'
function ClimberHome({problem, climbproblem}){
    // console.log(problem[0].difficulty)
    // console.log(climbproblem[0])
    return(
        
        <div>
            <ProblemCard problem={problem}/>
        </div>
        
    );
}

export default ClimberHome
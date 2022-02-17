import ProblemForm from './ProblemForm';
function MakerHome({problem, climbproblem}){
    return(
        <div>

            <h1>"sent to MakerHome"</h1>
            <ProblemForm problem={problem} climbProblem={climbproblem}/>
        </div>
        
    );
}

export default MakerHome
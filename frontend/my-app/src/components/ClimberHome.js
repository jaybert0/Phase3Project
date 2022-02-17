import ProblemCard from './ProblemCard'
import WallMap from './WallMap'

function ClimberHome({setSearch, problem, getProblems, climbproblem}){
    // console.log(problem[0].difficulty)
    // console.log(climbproblem[0])

    const delay = ms => new Promise(res => setTimeout(res, ms))
    return(
        
        <div>
            <WallMap id="wallmap" />
            <br></br>
                {/* <button onClick={() => setSearch("favorites")}>search favorite</button>
                <button onClick={() => setSearch("in progress")}>search in progress</button>
                <button onClick={() => setSearch("completed")}>search completed</button> */}
                <button onClick={() => setSearch("easy")}>search easy</button>
                <button onClick={() => setSearch("hard")}>search hard</button>
                <button onClick={async () => {
                    getProblems();
                    await delay(500);
                    setSearch("jugs")
                    }}>
                Jugs
                </button>
                <button onClick={async () => {
                    getProblems();
                    await delay(500);
                    setSearch("crimps")
                    }}>
                Crimps
                </button>
                <button onClick={async () => {
                    getProblems();
                    await delay(500);
                    setSearch("pincher")
                    }}>
                Pincher
                </button>

            {problem.map(problem => (
                <ProblemCard alignItems="center" justifyContent="center" id="problemcard"
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
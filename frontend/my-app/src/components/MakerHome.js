import ProblemForm from './ProblemForm';
import MakerCard from './MakerCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';

function MakerHome({problem, climbproblem}){
    return(
        <div>

            <h1>"sent to MakerHome"</h1>
            <ProblemForm problem={problem} climbProblem={climbproblem}/>
            {problem.map(problem => (
                <MakerCard 
                key={problem.id} 
                difficulty={problem.difficulty}
                location={problem.location}
                technique={problem.technique}
                grip_color={problem.grip_color}
                end_date={problem.end_date}
                problem_description={problem.problem_description}
                />
            )
        )
        }
        </div>
        
    );
}

export default MakerHome
import ProblemForm from './ProblemForm';
import { useState } from 'react';
import MakerCard from './MakerCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';

function MakerHome({problem, climbproblem}){

    const [formProblem, setFormProblem] = useState({
        id:"",
        difficulty: "",
        grip_color: "",
        technique: "",
        location: "",
        end_date: "",
        problem_description: "",
        maker_id: 1,
    })
    return(
        <div>
            
            <ProblemForm problem={problem} climbProblem={climbproblem} formProblem={formProblem} setFormProblem={setFormProblem}/>
            {problem.map(problem => (
                <MakerCard
                formProblem={formProblem} 
                setFormProblem={setFormProblem}
                id={problem.id} 
                problem={problem}
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
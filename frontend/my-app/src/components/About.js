import Typography from '@mui/material/Typography';
import freddy from "./freddy.png"
import Box from "@material-ui/core/Box";

function About() {
    return(
        <Box>
        <Typography>
            Ever wish you could communicate with the route setter at your gym and tell them how much you enjoyed a certain route? <br/>
            Ever show up and see the route you have been working on for weeks that you were only one move away from completing was gone?<br/>
            Ever want to know what routes feature jugs or slopers or palmers so you can practice?<br/>
            That where BO(U)LDERBETA comes in, opening up communication between you and the route setters so they can make routes that reflect what you want (and maybe even keep that route you have been working on for just a little longer).

        </Typography>
        
        <img src={freddy} alt="freddyfalling" />
        </Box>

    )
}

export default About
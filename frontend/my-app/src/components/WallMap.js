import React from "react";
import wall from "./wall.png"
import Container from "@material-ui/core/Container";
import { positions } from '@mui/system'
import "../styles/WallMap.css"

function WallMap () {
    return (
        <Container id="map">
            <img src={wall} alt="Facility Map"/>
        </Container>
    )
}

export default WallMap;
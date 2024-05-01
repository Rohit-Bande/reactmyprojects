import React from "react";
import web from "../src/download.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return(
       <>
       <Common name="Welcom to Home page" imgsrc={web} visit="/service" btname="Get started" />
       </>
    )
}

export default Home;
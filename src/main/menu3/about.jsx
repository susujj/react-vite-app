import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
function About() {
  console.log("About");

  return (<div>
    <h2>About</h2>
    <li><Link to="topics">topics</Link></li>
    <Outlet />
  </div>);
}
export default About
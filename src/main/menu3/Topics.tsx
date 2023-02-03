
import { useEffect, useState, useContext } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
function Topics() {
  // let match = useRouteMatch();
  console.log("Topics");

  // const cleanUp = () => {
  //   console.log("cleanUp");
  // }
  useEffect(() => {
    console.log("componentDidMount");
    return function cleanUp() { console.log("componentDidUNMount"); };

  }, []);
  return (
    <div>
      <h2>Topics</h2>
      <li>
        <Link to=":topicId">topicId</Link>
      </li>

      <Outlet />
    
    </div>
  );
}

export default Topics
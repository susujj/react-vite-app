import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
import axios from 'axios';

function Topic() {
  let { topicId } = useParams();
  console.log(topicId);


  const click = () => {
  }
  return (<div>
    <h2 onClick={click}>TestUI</h2>
    <h3>Requested topic ID: {topicId}</h3>
  </div>);;
}

export default Topic
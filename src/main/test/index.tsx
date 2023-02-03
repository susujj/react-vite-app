import { useState, useCallback } from 'react'
import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes,
    Link, Outlet,
    useParams,
} from "react-router-dom";
import axios from 'axios';
function Test() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Test
import { useState, useCallback } from 'react'
import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes,
    Link, Outlet,
    useParams,
} from "react-router-dom";
import axios from 'axios';
function DemoTest() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default DemoTest
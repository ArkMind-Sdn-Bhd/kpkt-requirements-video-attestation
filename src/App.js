import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Demo1Page} from "./pages/Demo1/Demo1";
import {Demo2Page} from "./pages/Demo2/Demo2";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/demo1"}
                    element={<Demo1Page />}
                />
                <Route
                    path={"/demo2"}
                    element={<Demo2Page />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

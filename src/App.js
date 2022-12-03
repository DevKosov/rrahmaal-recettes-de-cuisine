import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recettes from "./components/Recettes";
import Menu from "./components/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./components/Blog";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route index element={<Recettes />} />
                        <Route path="blog" element={<Blog />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;
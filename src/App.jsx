import React from "react";
import { useRoutes } from 'react-router-dom';
import Layout from "./pages/Layout";

const App = () => {
    const elements = useRoutes([
        // if root route -> display Layout
        { path: '/', element: <Layout />}
    ]);

    return elements
};

export default App;

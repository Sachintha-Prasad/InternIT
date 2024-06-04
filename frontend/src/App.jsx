import React from "react"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import InternPage from "./pages/InternPage"
import InternsPage from "./pages/InternsPage"
import PostInternPage from "./pages/PostInternPage"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route path="*" element={<NotFoundPage />} />
                <Route index element={<HomePage />} />
                <Route path="/internships" element={<InternsPage />} />
                <Route path="/add-internship" element={<PostInternPage />} />
                <Route path="/internships/:id" element={<InternPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App

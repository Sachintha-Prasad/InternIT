import React from "react"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

// general pages
import MainLayout from "./layouts/MainLayout"
import AdminLayout from "./layouts/AdminLayout"
import NotFoundPage from "./pages/NotFoundPage"

// user pages
import HomePage from "./pages/user/HomePage"
import SingleInternPage from "./pages/user/SingleInternPage"
import InternsPage from "./pages/user/InternsPage"

// admin pasges
import AdminHomePage from "./pages/admin/AdminHomePage"
import PostInternPage from "./pages/admin/PostInternPage"
import UpdateInternPage from "./pages/admin/UpdateInternPage"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                {/* user path */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    {/* not found route */}
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/internships" element={<InternsPage />} />
                    <Route
                        path="/internships/:id"
                        element={<SingleInternPage />}
                    />
                </Route>

                {/* admin path */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminHomePage />} />
                    <Route
                        path="/admin/add-intern"
                        element={<PostInternPage />}
                    />
                    <Route
                        path="/admin/edit-intern/:id"
                        element={<UpdateInternPage />}
                    />
                </Route>
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App

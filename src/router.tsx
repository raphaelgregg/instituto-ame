import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/home"
import { About } from "./pages/about"
import { DefaultLayout } from "./layouts/DefaultLayout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}
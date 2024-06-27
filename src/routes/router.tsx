import { Layout } from "@/layouts"
import { AboutPage, HomePage } from "@/pages"
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"

export const Router = ()=>{
    return(
        <Routers>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                </Route>
            </Routes>
        </Routers>
    )
}
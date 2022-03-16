import { Routes, Navigate, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PostsPage from "./pages/PostsPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/cr eate" element={<CreatePage />} />
                <Route path="/update" element={<UpdatePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;

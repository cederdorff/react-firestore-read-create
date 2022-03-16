import { Routes, Navigate, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PostsPage from "./pages/PostsPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<PostsPage showLoader={setShowLoader} />} />
                <Route path="/create" element={<CreatePage showLoader={setShowLoader} />} />
                <Route path="/update" element={<UpdatePage showLoader={setShowLoader} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {showLoader && <Loader />}
        </main>
    );
}

export default App;

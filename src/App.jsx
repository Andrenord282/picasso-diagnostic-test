import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from "./pages/PostPage";


const App = () => {
    return <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts/:postId/:userId" element={<PostPage />} />
    </Routes >;
};

export default App;

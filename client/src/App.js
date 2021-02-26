import logo from './logo.svg';
import './App.css';
// import { Text } from "@chakra-ui/react";
import { Router } from "@reach/router"
import LandingPage from './pages/landing-page/landingPage';
import RegisterPage from './pages/register-page/registerPage';
import PostGif from './pages/post-gif/postGif';
import PostArticle from './pages/post-article/postArticle';
import GifsPage from './pages/gif-page/gifsPage';
import ArticlePage from './pages/articles-page/articlesPage';
import LoginPage from './pages/login-page/loginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
        <LoginPage path="/login" />
        <RegisterPage path="/register" />
        <PostGif path="/new-gif" />
        <PostArticle path="/new-article" />
        <GifsPage path ="/gif" />
        <ArticlePage path="/articles" />
      </Router>
    </div>
  );
}

export default App;

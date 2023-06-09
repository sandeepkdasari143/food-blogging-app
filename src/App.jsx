import React from 'react';
import { db } from './config/firebase.config';
import { getDocs, collection } from 'firebase/firestore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Photography from './pages/Photography/Photography';
import Blog from "./pages/Blog/Blog";
import LogIn from './pages/LogIn/LogIn';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/login"} element={<LogIn />} />
          <Route exact path={"/"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route exact path={"/blog"} element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route exact path={"/search"} element={<ProtectedRoute><Search /></ProtectedRoute>} />
          <Route exact path={"/foodieinsta"} element={<ProtectedRoute><Photography /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
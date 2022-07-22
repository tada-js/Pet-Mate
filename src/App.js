import React from 'react';
import GlobalStyles from './style/globalStyle';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import InitPage from './pages/InitPage';
import Login from './template/login/Login'
import { AnimatePresence } from 'framer-motion';
import SignUpMainPage from './pages/SignUpMain';
import MyProfilePage from './pages/MyProfilePage'
import ProfileModify from './template/profileModify/ProfileModify'
import AddPost from './template/post/AddPost';
import ChatList from './template/chat/ChatList';
import AccountSearch from './template/search/AccountSearch';
import MyFollow from './template/follow/MyFollow';
import YourFollow from './template/follow/YourFollow';
import ChatRoom from './template/chat/ChatRoom';
import AddSnsPost from './template/snsPost/AddSnsPost';
import NotFound from './pages/NotFoundPage';
import { PrivateRoute, PublicRoute } from './Route';
import YourProfilePage from './pages/YourProfilePage';
import ModifyPost from './template/postModify/PostModify';
import ModifySnsPost from './template/snsPostModify/SnsPostModify';

function App() {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence />
      <Routes>
        {/* public page */}
        <Route path='/' element={<InitPage />}></Route>
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>}></Route>
        <Route path='/join' element={<PublicRoute><SignUpMainPage /></PublicRoute>}> </Route>
        {/* private page */}
        <Route path='/homepage' element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
        <Route path='/feedpage' element={<PrivateRoute><FeedPage /></PrivateRoute>}></Route>
        <Route path='/profilepage' element={<PrivateRoute><MyProfilePage /></PrivateRoute>}></Route>
        <Route path='/profilemodify' element={<PrivateRoute><ProfileModify /></PrivateRoute>}></Route>
        <Route path='/post' element={<PrivateRoute><AddPost /></PrivateRoute>}></Route>
        <Route path='/postmodify' element={<PrivateRoute>< ModifyPost/></PrivateRoute>}></Route>
        <Route path='/snspost' element={<PrivateRoute><AddSnsPost /></PrivateRoute>}></Route>
        <Route path='/snspostmodify' element={<PrivateRoute><ModifySnsPost/></PrivateRoute>}></Route>
        <Route path='/chatpage' element={<PrivateRoute><ChatList /></PrivateRoute>}></Route>
        <Route path='/search' element={<PrivateRoute><AccountSearch /></PrivateRoute>}></Route>
        <Route path='/myfollow' element={<PrivateRoute><MyFollow /></PrivateRoute>}></Route>
        <Route path='/yourfollow' element={<PrivateRoute><YourFollow /></PrivateRoute>}></Route>
        <Route path='/chatroom' element={<PrivateRoute><ChatRoom /></PrivateRoute>}></Route>
        <Route path='/userprofile' element={<PrivateRoute><YourProfilePage /></PrivateRoute>}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <AnimatePresence />
    </>
  )
}
export default App;
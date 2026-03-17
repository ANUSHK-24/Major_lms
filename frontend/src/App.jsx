import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
export const serverUrl="https://major-lms.onrender.com"
import {ToastContainer} from "react-toastify";
import getCurrentUser from './customHooks/getCurrentUser';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import ForgetPassword from './pages/ForgetPassword';
import EditProfile from './pages/EditProfile';
import Dashboard from './pages/Educator/Dashboard';
import Courses from './pages/Educator/Courses';
import CreateCourse from './pages/Educator/CreateCourse';
import AddCourses from './pages/Educator/EditCourse';
import getCreatorCourseData from './customHooks/getCreatorCourse';
import getCouseData from './customHooks/getCourseData';
import AllCourses from './pages/AllCourses';
import CreateLecture from './pages/Educator/CreateLecture';
import EditLecture from './pages/Educator/EditLecture';
import ViewCourse from './pages/ViewCourse';
import ScrollToTop from './components/ScrollToTop';
import ViewLecture from './pages/ViewLectures';
import EnrolledCourse from './pages/Educator/EnrolledCourse';
import getAllReviews from './customHooks/getAllReviews';
import SearchWithAi from './pages/SearchWithAi';


function App() {
  getCurrentUser()
   getCreatorCourseData()
   getCouseData()
   getAllReviews()
  const {userData}=useSelector(state=>state.user)
  return (
    <>
    <ToastContainer />
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={!userData? <SignUp />:<Navigate to={"/"}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={userData?<Profile />:<Navigate to={"/signup"}/>}/>
        <Route path='/forget' element={userData?<ForgetPassword />:<Navigate to={"/signup"}/>}/>
        <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/signup" />} />
        <Route path="/allcourses" element={userData ? <AllCourses /> : <Navigate to="/signup" />} />
        <Route path='/dashboard' element={userData?.role === "educator"?<Dashboard/>:<Navigate to={"/signup"}/>}/>
        <Route path='/courses' element={userData?.role === "educator"?<Courses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/addcourses/:courseId' element={userData?.role === "educator"?<AddCourses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/createcourses' element={userData?.role === "educator"?<CreateCourse/>:<Navigate to={"/signup"}/>}/>
         <Route path='/createlecture/:courseId' element={userData?.role === "educator"?<CreateLecture/>:<Navigate to={"/signup"}/>}/>
         <Route path='/editlecture/:courseId/:lectureId' element={userData?.role === "educator"?<EditLecture/>:<Navigate to={"/signup"}/>}/>
         <Route path='/viewcourse/:courseId' element={userData?<ViewCourse/>:<Navigate to={"/signup"}/>}/>
         <Route path='/viewlecture/:courseId' element={userData?<ViewLecture/>:<Navigate to={"/signup"}/>}/>
         <Route path='/enrolledcourses' element={userData?<EnrolledCourse/>:<Navigate to={"/signup"}/>}/>
          <Route path='/searchwithai' element={userData?<SearchWithAi/>:<Navigate to={"/signup"}/>}/>
        
      </Routes>
    </>
  )
}

export default App

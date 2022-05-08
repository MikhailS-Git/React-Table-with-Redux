import { createContext, useEffect } from "react";
import "./App.styles.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/postsSlice";
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext([])

export default function App(){

    const dispatch = useDispatch()

    //Fetch posts from jsonplaceholder.com
    useEffect(()=>{
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
            <Header />
            <Routes>
                <Route
                 path="*"
                 element={<Main />}
                />
            </Routes>
            <Footer />
        </div>
    )
}
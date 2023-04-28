import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import react from "react";
import { Await } from "react-router-dom";

 export const Api_Url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isloading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "flase", msg: "" })
    const [query, setQuery] = useState("");

    const getmovies = async (url) => {
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({
                    show: false,
                    msg: ""
                })

            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })

            }
        } catch (error) {
            console.log(error);

        }


    }


    useEffect(() => {
        var timee = setTimeout(() => {
            getmovies(`${Api_Url}&s=${query}`)
        }, 1000);
        return () => clearTimeout(timee);

    }, [query])

    return <AppContext.Provider value={{ isloading, isError, movie, query, setQuery }}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
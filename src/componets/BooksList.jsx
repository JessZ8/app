import React, {useState,useEffect} from "react";
import '../App'
import {API_URL} from '../API'
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from 'react-router-dom';

const BooksList = () => {

    const[ books, setBooks] = useState ([]);

    const{favorites , addToFavorites, removeFromFavorites} = useAppContext();   
    
    const navigate = useNavigate();

    const favoriteChecker = (id)=>{
        const boolean = favorites.some((book) => book.id === id);
        return boolean;

    }
    

    useEffect(()=> {
        axios.get(API_URL)
        .then((res) =>{
            console.log(res.data)
            setBooks(res.data)
        })
        .catch((err) => console.log(err));
    
} , []);

    return(
        <div  className="book-list"> 
        
            {books.map((book)=>(
                <div key={book.id} className="book">
                    <div><h4>{book.title}</h4></div>
                    <div><img src={book.image_url} alt="#"  onClick={() => navigate(`/book/${book.id}`)}/></div>
                    <div>
                        {favoriteChecker(book.id) ?(
                          <button className="button" onClick={() => removeFromFavorites(book.id)}>
                            Remove  from Favorites
                            </button>
                        ): (
                            <button className="button" onClick={() => addToFavorites(book)}>
                            Add Favorites
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default BooksList
import React from "react";
import { useParams } from "react-router-dom";
import '../App'
import { useState ,useEffect} from "react";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";


const BookDetails = () => {

const [ book,setBook] = useState({});
const{ id  } = useParams();

useEffect(()=> {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res =>{
        setBook(res.data);
    })
    .catch((err)=> console.log(err))
}, [id]);



    return(
        <div className="book-details"> 
        <div><h2>{book?.title}</h2>
        <img src={book?.image_url} alt="" />
        </div>
       <div>
        <h2>Descripcion</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>genres</h2>
       <p>{book?.genres}</p> 
       <h2>Num pages</h2>
       <p>{book?.num_pages}</p>
        </div> 
        <div>
            <button><a href="https://books.google.es/">Descargar en GoogleBooks</a></button>
        </div>
        </div>
    )
}
export default BookDetails
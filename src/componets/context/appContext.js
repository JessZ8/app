import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error("Appcontext must be within appContext Provider");
    }
    return context;
};

const AppContextProvider =({children})=> {
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (book) =>{
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(book);

        setFavorites(newFavorites);

    }

    const  removeFromFavorites = (id) =>{
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.filter((book) => book.id !== id);
        setFavorites(newFavorites)
    }

     const filter = (event) => {
        var text = event.target.value
        const data = this.state.productoBackup
        const newData = data.filter(function(item){
            const itemData = item.titulo.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            producto: newData,
            text: text,
        })
     }

    return (
        <AppContext.Provider
         value={{favorites , addToFavorites, removeFromFavorites, filter}}
         >
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider
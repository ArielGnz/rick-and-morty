import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

export function Card({id, name, status, species, gender, image, origin, onClose, addFav, removeFav, allCharacters}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      const character = {id, name, status, species, gender, origin, image}

      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(character);
      }
   }

   const handleRemoveFav = (id) => {
      onClose(id);
      removeFav(id);
   }

   useEffect(() => {
      allCharacters?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      })
   }, [allCharacters]);

   // useEffect(() => {
   //    myFavorites?.forEach((fav) => {
   //       if (fav.id === id){
   //          setIsFav(true)
   //       }
   //    })
   // }, [myFavorites]);

   return (
      <div>
         <>
         {
            isFav? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         </>

         <button onClick={() => handleRemoveFav(id)}>X</button>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>SPECIES: {species}</h2>
         <h2>GENDER: {gender}</h2>
         <h2>STATUS: {status}</h2>
         <h2>ORIGIN: {origin}</h2>
         <img src={image} alt='' />
         
      </div>
   );
}

export const mapDispatchToPropos = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToPropos)(Card)



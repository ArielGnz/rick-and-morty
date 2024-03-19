import { connect, useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { filterCards, orderCars } from "../../redux/actions";
import { useState } from "react";


//import { mapStateToProps } from "../Card/Card";

const Favorites = () => {
    const [aux, setAux] = useState(false);
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCars(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    

    return ( 
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All Favorites</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                
            </select>
            {myFavorites?.map(({id, name, status, gender, image, origin, species}) => (
               
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        gender={gender}
                        image={image}
                        origin={origin}
                        species={species}
                    />
                    ))} 
                    
                         
        </div>
    );
}

export default Favorites;

//export const mapStateToProps = (state) => {
//    return {//
//        myFavorites: state.myFavorites
//    }
//    
//}


//export default connect(mapStateToProps, null)(Favorites);
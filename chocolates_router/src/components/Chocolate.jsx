import { Link } from "react-router-dom";

const Chocolate = ({chocolate, deleteChocolate}) => {

    const handleButtonClick = () => {
        deleteChocolate(chocolate.id)
    }

    return (
        <article>
            <h3>{chocolate.name}</h3>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button><Link to={`/chocolates/${chocolate.id}/edit`}>Edit</Link></button>
            <button onClick={handleButtonClick}>Delete</button>
            <hr />
        </article>
    );

}

export default Chocolate;
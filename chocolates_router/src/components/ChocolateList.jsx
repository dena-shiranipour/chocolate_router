import Chocolate from "./Chocolate";

const ChocolateList = ({chocolates, deleteChocolate}) => {

    const chocolateComponents = chocolates.map(chocolate => {
        return(
            <Chocolate 
                key={chocolate.id} 
                chocolate={chocolate}
                deleteChocolate={deleteChocolate}
            />
        );
    });

    return(
        <section>
            <h2>Chocolate List</h2>
            {chocolateComponents}
        </section>
    )

}

export default ChocolateList;
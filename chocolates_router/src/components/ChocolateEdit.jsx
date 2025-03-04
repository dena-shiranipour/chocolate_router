import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ChocolateEdit = ({estates, updateChocolate}) => {

    const navigate = useNavigate();

    const chocolate = useLoaderData();

    const [stateChocolate, setStateChocolate] = useState(
        {
            name: chocolate.name,
            cocoaPercentage: chocolate.cocoaPercentage,
            estateId: chocolate.estate.id,
            id: chocolate.id
        }
    );

    const handleValueChange = (event) => {
        const propertyName = event.target.name;
        const copiedChocolate = { ...stateChocolate };
        copiedChocolate[propertyName] = event.target.value;
        setStateChocolate(copiedChocolate);
    }

    const estateOptions = estates.map((estate) => {
        return <option key={estate.id} value={estate.id}>{estate.name}</option>
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateChocolate(stateChocolate);
        navigate("/chocolates");
    }

    return (
        <section>
            <h2>Edit chocolate</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="chocolate-name">Chocolate Name:</label>
                <input
                    id="chocolate-name"
                    name="name"
                    type="text"
                    placeholder="enter chocolate name"
                    onChange={handleValueChange}
                    value={stateChocolate.name}
                />

                <label htmlFor="cocoa-percentage">Cocoa Percentage:</label>
                <input
                    id="cocoa-percentage"
                    name="cocoaPercentage"
                    type="number"
                    min={1}
                    max={100}
                    onChange={handleValueChange}
                    value={stateChocolate.cocoaPercentage}
                />

                <label htmlFor="estate">Estate</label>
                <select
                    id="estate"
                    name="estateId"
                    defaultValue={stateChocolate.estateId}
                    onChange={handleValueChange}
                >
                    <option disabled value="select-estate">Choose an estate</option>
                    {estateOptions}
                </select>

                <input type="submit" value="Edit Chocolate" />
            </form>
        </section>
    )
}

export default ChocolateEdit;
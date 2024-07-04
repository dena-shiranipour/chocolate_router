import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChocolateForm = ({estates, postChocolate}) => {

    const [stateChocolate, setStateChocolate] = useState(
        {
            name: "",
            cocoaPercentage: 0,
            estateId: null
        }
    );

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postChocolate(stateChocolate);
        navigate("/chocolates");
    }

    const handleValueChange = (event) => {
        const propertyName = event.target.name;
        const copiedChocolate = { ...stateChocolate };
        copiedChocolate[propertyName] = event.target.value;
        setStateChocolate(copiedChocolate);
    }

    const estateOptions = estates.map((estate) => {
        return <option key={estate.id} value={estate.id}>{estate.name}</option>
    });

    return (
        <section>
            <h2>Add a new chocolate</h2>
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
                    defaultValue="select-estate"
                    onChange={handleValueChange}
                >
                    <option disabled value="select-estate">Choose an estate</option>
                    {estateOptions}
                </select>

                <input type="submit" value="Add Chocolate" />
            </form>
        </section>
    )

}

export default ChocolateForm;
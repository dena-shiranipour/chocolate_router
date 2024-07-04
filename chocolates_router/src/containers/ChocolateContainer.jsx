import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import ChocolateList from "../components/ChocolateList";
import ChocolateForm from "../components/ChocolateForm";
import ChocolateEdit from "../components/ChocolateEdit";

const ChocolateContainer = () => {
    const [chocolates, setChocolates] = useState([]);
    const [estates, setEstates] = useState([]);
    const fetchChocolates = async () => {
        const response = await fetch("http://localhost:8080/chocolates");
        const data = await response.json();
        setChocolates(data);
    }
    const fetchEstates = async () => {
        const response = await fetch("http://localhost:8080/estates");
        const data = await response.json();
        setEstates(data);
    }
    const postChocolate = async (newChocolate) => {
        const response = await fetch("http://localhost:8080/chocolates", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newChocolate)
        });
        const savedChocolate = await response.json();
        setChocolates([...chocolates, savedChocolate]);
    }
    const deleteChocolate = async (id) => {
        await fetch(`http://localhost:8080/chocolates/${id}`, {
            method: "DELETE"
        });
     setChocolates(chocolates.filter(chocolate => chocolate.id !== id));
    }
    const updateChocolate = async (chocolate) => {
        await fetch(`http://localhost:8080/chocolates/${chocolate.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(chocolate)
        });
        await fetchChocolates();
    }

    const chocolateLoader = ({params}) => {
        const chocolateToUpdate = chocolates.find(chocolate => {
            return chocolate.id === parseInt(params.id);
        });
        return chocolateToUpdate;
    }

    useEffect(() => {
        fetchChocolates();
        fetchEstates();
    }, []);

    const chocolateRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/chocolates",
                    element: <ChocolateList
                        chocolates={chocolates}
                        deleteChocolate={deleteChocolate}
                        />
                },
                {
                    path: "/chocolates/new",
                    element: <ChocolateForm
                        estates={estates}
                        postChocolate={postChocolate}
                        />
                },
                {
                    path: "/chocolates/:id/edit",
                    loader: chocolateLoader,
                    element: <ChocolateEdit
                        estates={estates}
                        updateChocolate={updateChocolate}
                        />
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={chocolateRoutes}/>
        </>
    )
}
export default ChocolateContainer;
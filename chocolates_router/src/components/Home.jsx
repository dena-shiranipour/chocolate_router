import { Link, Outlet } from "react-router-dom";

const Home = () => {

    return (
        <>
            <header>
                <h1>Single Origin Chocolates</h1>
                <nav>
                    <ul>
                        <li><Link to="/chocolates">All Chocolates</Link></li>
                        <li><Link to="/chocolates/new">Add New Chocolate</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )

}

export default Home;
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <div className='product-card-container'>
              <Products/>  
            </div>
        </> //Contenedores tipo div
    );
};

export default Home;

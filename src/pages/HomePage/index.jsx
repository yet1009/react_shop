import FilterCategory from "./filter-category/FilterCategory.jsx";

const HomePage = () => {


    return (
        <div className='page'>
            <div className='container'>
                <h1>Products</h1>
                <FilterCategory />
            </div>
        </div>
    )
}

export default HomePage;
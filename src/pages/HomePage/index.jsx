import FilterCategory from "./filter-category/FilterCategory.jsx";
import CardList from "./card-list/CardList.jsx";
import CountProducts from "./count-prouducts/CountProducts.jsx";

const HomePage = () => {


    return (
        <div className='page'>
            <div className='container'>
                <h1>Products</h1>
                <FilterCategory />
                <CountProducts />
                <CardList />
            </div>
        </div>
    )
}

export default HomePage;
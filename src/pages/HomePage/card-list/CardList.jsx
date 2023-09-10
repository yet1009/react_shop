import {useAppDispatch, useAppSelector} from "../../../hooks/redux.js";
import {useEffect} from "react";
import styles from './CardList.module.scss'
import {fetchProducts} from "../../../store/products/products.slice.js";
import CardItem from "./card-item/CardItem.jsx";
import CardSkeleton from "../card-skeleton/CardSkeleton.jsx";

const CardList = () => {

    const dispatch = useAppDispatch()
    const { products, isLoading } = useAppSelector(state => state.productsSlice)
    const category = useAppSelector(state => state.categoriesSlice)

    useEffect(() => {
        dispatch(fetchProducts(category?.toLowerCase()))
    }, [category])


    if(isLoading) return <CardSkeleton />

    return (
        <ul className={styles['card_list']}>
            {
                products.map(product => <CardItem key={product.id} item={product} />)
            }
        </ul>
    );
};

export default CardList;
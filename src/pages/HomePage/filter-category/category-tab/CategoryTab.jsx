import styles from './CategoryTab.module.scss'
import {setActiveCategory} from "../../../../store/categories/categories.slice.js";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux.js";

const CategoryTab = ({ text, categoryName }) => {

    const category = useAppSelector((state) => state.categoriesSlice)
    const dispatch = useAppDispatch()

    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName))
    }

    return (
        <div>
            <button
                className={categoryName === category ? styles.active_category : styles.category_button}
                onClick={getActiveCategory}
            >{text}</button>
        </div>
    );
};

export default CategoryTab;
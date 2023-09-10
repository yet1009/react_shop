import styles from './FilterCategory.module.scss'
import CategoryTab from "./category-tab/CategoryTab.jsx";
import {CategoriesName} from "../../../store/categories/categories.type.js";

const FilterCategory = () => {
    return (
        <div className={styles.filter_category}>
            <CategoryTab text={'모두'} categoryName={CategoriesName.All} />
            <CategoryTab text={'전자기기'} categoryName={CategoriesName.Electronics} />
            <CategoryTab text={'쥬얼리'} categoryName={CategoriesName.Jewelry} />
            <CategoryTab text={'남성의류'} categoryName={CategoriesName.MensClothing} />
            <CategoryTab text={'여성의류'} categoryName={CategoriesName.WomenClothing} />
        </div>
    );
};

export default FilterCategory;
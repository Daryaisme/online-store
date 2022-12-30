import styles from './Main.module.css';
import Product from '../product/Product';
import Categories from '../category/Categories';
import Gender from '../gender/Gender';
import Search from '../search/Search';
import Sort from '../sort/Sort';
import { useSelector } from 'react-redux';
import { selectDucksFiltered } from '../../redux/selectors';

function Main() {
  const ducksData = useSelector(selectDucksFiltered);

  return (
    <div className={styles.container}>
      <div className={styles.search__and__sort}>
        <Search />
        <Sort />
        <div className={styles.grid}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <div className={styles.products__and__filters}>
        <div className={styles.filters}>
          <div className={styles.category}>
            <p> Категория </p>
            <Categories />
          </div>
          <div className={styles.brand}>
            <p> Пол </p>
            <Gender />
          </div>
          <div className={styles.price}>
            <p> Цена </p>
            <div className={styles.double__range}>
              <div className={styles.values}>
                <div className={styles.price__min}> 0 </div>
                <div className={styles.price__max}> 100 </div>
              </div>
              <div className={styles.range}></div>
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                className={styles.range__left}
              />
              <input
                type="range"
                min="0"
                max="100"
                value="100"
                className={styles.range__right}
              />
            </div>
          </div>
          <div className={styles.ctock}>
            <p> Наличие </p>
            <div className={styles.double__range}>
              <div className={styles.values}>
                <div className={styles.price__min}> 0 </div>
                <div className={styles.price__max}> 100 </div>
              </div>
              <div className={styles.range}></div>
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                className={styles.range__left}
              />
              <input
                type="range"
                min="0"
                max="100"
                value="100"
                className={styles.range__right}
              />
            </div>
          </div>
        </div>
        <div className={styles.products}>
          {ducksData &&
            ducksData.map((duck) => {
              return <Product key={duck.id} duck={duck} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Main;

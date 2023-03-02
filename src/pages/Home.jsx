import React from 'react';
import Item from '../components/Goods/Item';
import Categories from '../components/Categories/Categories';
import Skeletons from '../components/Goods/Skeletons';
//import Slider from '../components/MainBlock/Slider';
import Search from '../components/Search/Search';
import Sort from '../components/Sort/Sort';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';
import { fetchItems, selectItems } from '../redux/slices/itemsSlice';

const Home = () => {
  const { categoryId, searchValue, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectItems);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getItems = async () => {
    const order = sort.sortProperty.includes('-') ? `asc` : `desc`;
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchItems({ category, search, sortBy, order }));
  };

  React.useEffect(() => {
    getItems();
  }, [categoryId, searchValue, sort.sortProperty]);

  const skeletons = [...new Array(10)].map((_, index) => <Skeletons key={index} />);
  const item = items.map((obj) => <Item key={obj.id} {...obj} />);

  return (
    <div>
      {/* <Slider /> */}
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Sort value={sort} />
      <Search />
      {status === 'error' ? (
        <div>
          <h2>UNEXPECTED ERROR</h2>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : item}</div>
      )}
    </div>
  );
};

export default Home;

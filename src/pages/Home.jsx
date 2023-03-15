import React from 'react';
import Item from '../components/Goods/Item';
import Categories from '../components/Categories/Categories';
import Skeletons from '../components/Goods/Skeletons';
import Error from './Error';
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

    dispatch(fetchItems({ order, sortBy, category, search }));
  };

  React.useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [categoryId, searchValue, sort.sortProperty]);

  const skeletons = [...new Array(10)].map((_, index) => <Skeletons key={index} />);
  const item = items.map((obj) => <Item key={obj.id} {...obj} />);

  return (
    <div>
      <div className="top">
        <Search />
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      {status === 'error' ? (
        <Error />
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : item}</div>
      )}
    </div>
  );
};

export default Home;

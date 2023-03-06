import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import styles from './FullItem.module.scss';

const FullItem = () => {
  const [items, setItems] = React.useState();

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const { data } = await axios.get(`https://63d371c7c1ba499e54c15bfd.mockapi.io/items/` + id);
        setItems(data);
      } catch (error) {
        alert('fetch error');
      }
    }
    fetchItems();
  }, [id]);

  if (!items) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.block}>
      <img className={styles.img} src={items.imageUrl} alt="fullItemImage" />
      <h2 className={styles.h2}>{items.title}</h2>
      <h4 className={styles.h4}>Starts from {items.price}$</h4>
      <Link to="/">
        <button className={styles.button}>
          <span className={styles.span}>Go back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullItem;

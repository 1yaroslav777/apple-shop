import React from 'react';

import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['All', 'Iphones', 'Macbooks', 'Ipads'];

  return (
    <div className={styles.categories}>
      <h1 className={styles.mainH}>Select your way right now!</h1>
      <ul>
        {categories.map((category, id) => (
          <li
            onClick={() => onChangeCategory(id)}
            className={value === id ? styles.active : ''}
            key={id}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

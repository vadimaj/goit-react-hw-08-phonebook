import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from '../../../redux/filterSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterChangeHandler = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        name="query"
        placeholder="search by name"
        className={css['form-input']}
        value={filterValue}
        onChange={filterChangeHandler}
      />
    </div>
  );
};

export default Filter;

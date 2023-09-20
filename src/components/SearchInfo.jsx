import React, { useCallback, useRef, useState } from 'react';

import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import close from '../assets/close.svg';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setCurrentTag, setCurrentType, setSearch } from '../redux/slices/filter';

const SearchInfo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const selectedTypeRef = useRef(null);
  const selectedTagRef = useRef(null);

  const handleSelectType = () => {
    const currentTypeValue = selectedTypeRef.current.value;
    dispatch(setCurrentType(currentTypeValue));
  };

  const handleSelectTag = () => {
    const currentTagValue = selectedTagRef.current.value;
    dispatch(setCurrentTag(currentTagValue));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-content">
      <h5 className="current-location">CMDB / Серверы и ПК</h5>
      <h2>Серверы и ПК</h2>
      <div className="searchInfo">
        <h5 className="notes">Записи 1 - 50 из 369</h5>
        <div className="search">
          <input
            type="text"
            placeholder="Введите что-нибудь..."
            value={value}
            onChange={onChangeInput}
          />
          <img src={search} alt="search" id="searchIcon" />
          <img src={filter} alt="filter" id="filterIcon" onClick={() => setIsOpen(!isOpen)} />
          {isOpen ? (
            <div className="subSearch">
              <div className="filters">
                <h3>Фильтры</h3>
                <img src={close} alt="close" onClick={() => setIsOpen(!isOpen)} />
              </div>
              <h5>Тип ПК</h5>
              <select ref={selectedTypeRef} onChange={handleSelectType}>
                <option value="default">default (Все)</option>
                <option value="vm_host">vm_host</option>
                <option value="vm_guest">vm_guest</option>
              </select>
              <h5>Теги</h5>
              <select ref={selectedTagRef} onChange={handleSelectTag}>
                <option value="All">Все</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
              </select>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;

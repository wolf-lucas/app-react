import './SearchBar.scss';
import { useContext, useState } from 'react';
import { ItemsContext } from '../../context/ItemsContext';

function SearchBar() {

  const [textBox, setTextBox] = useState('')
  const ctx = useContext(ItemsContext)

  const handleSearch = (searchText: React.FormEvent<HTMLInputElement>) => {
    const value = searchText.currentTarget.value;
    ctx?.searchItems(value)
    setTextBox(value)
  }

  return (
    <>
      <div className="search-bar">
        <div className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input type="search" className="search-bar__form-search" 
              id="busqueda" value={textBox} onChange={handleSearch}
          />
        </div>
      </div>
    </>
  )
};

export default SearchBar;
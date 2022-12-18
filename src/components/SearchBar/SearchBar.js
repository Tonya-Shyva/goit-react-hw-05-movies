// import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  SearchBarInput,
  SearchBarWrap,
  SearchForm,
} from './SearchBar.styled';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleValueChange = event => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.error('Please, enter search value!');
      return;
    }
    // тут роблю запит на пошук

    // setSearchValue('');
  };

  return (
    <SearchBarWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          name="searchValue"
          value={searchValue}
          autocomplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleValueChange}
        />
        <Button type="submit" aria-label="search button">
          Search
        </Button>
      </SearchForm>
    </SearchBarWrap>
  );
}

export { SearchBar };

// SearchBar.propTypes = {
//   onFormSubmit: PropTypes.func.isRequired,
// };

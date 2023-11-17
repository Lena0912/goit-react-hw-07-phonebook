import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchField } from "./Filter.styled"



export const Filter = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(selectFilter);

    const handleSearchChange = e => {
        dispatch(setFilter(e.target.value.trim()));
    };

    return (
        <Container>
        <label htmlFor="filter-input">Find contacts by name</label>
        <SearchField
            value={filterName}
            type="text"
            onChange={handleSearchChange}
            id="filter-input">
        </SearchField>
        <FiSearch />         
    </Container>
);
};
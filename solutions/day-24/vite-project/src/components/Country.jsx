// Components
import Pagination from './Pagination';
import SearchInput from './SearchInput';
import CountriesList from './CountriesList';
// Hooks
import useSearch from '../hooks/useSearch';
import usePagination from '../hooks/usePagination';
import useFilterData from '../hooks/useFilteredData';
import useCurrentData from '../hooks/useCurrentData';

const Countries = () => {
  const { page, setPage, perPage } = usePagination();
  const { data, search, setSearch } = useSearch();
  const { filteredData, totalPages } = useFilterData(data, search, perPage);
  const currentData = useCurrentData(filteredData, page, perPage);

  return (
    <>
      <SearchInput search={search} setSearch={setSearch} />
      <CountriesList currentData={currentData} />
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </>
  );
};

export default Countries;

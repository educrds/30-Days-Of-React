const useFilterData = (data, search, perPage) => {
  const filterData = (data, search) =>
    data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));

  const filteredData = filterData(data, search);
  const totalPages = Math.ceil(filteredData.length / perPage);

  return { filteredData, totalPages };
};

export default useFilterData;

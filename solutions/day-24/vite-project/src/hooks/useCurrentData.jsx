const useCurrentData = (filteredData, page, perPage) => {
  return filteredData.slice((page - 1) * perPage, page * perPage);
};

export default useCurrentData;

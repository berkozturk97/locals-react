export const SortingOptions = [
  {
    key: "Price low to high",
    value: "price-asc",
    sortOptions: {
      _sort: "price",
      _order: "asc",
    },
  },
  {
    key: "Price high to low",
    value: "price-desc",
    sortOptions: {
      _sort: "price",
      _order: "desc",
    },
  },
  {
    key: "New to old",
    value: "time-desc",
    sortOptions: {
      _sort: "added",
      _order: "desc",
    },
  },
  {
    key: "Old to new",
    value: "time-asc",
    sortOptions: {
      _sort: "added",
      _order: "desc",
    },
  },
];

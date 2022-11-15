type PagableResponse<T> = {
  content: T[];
  pagable: Pagable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  first: boolean;
  size: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
};

type Pagable = {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export default PagableResponse;

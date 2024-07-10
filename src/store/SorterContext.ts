import { createContext, Dispatch, SetStateAction } from 'react';
import { CarData } from './types/CarData';
export type SortDirections = 'ascending' | 'descending';

export interface SorterData {
  key?: keyof CarData;
  option: SortDirections;
}

export const SorterContext = createContext<{
  sorter: SorterData;
  setSorter: Dispatch<SetStateAction<SorterData>>;
}>({
  sorter: {
    option: 'ascending',
  },
  setSorter: () => {},
});

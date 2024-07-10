import { createContext, Dispatch, SetStateAction } from 'react';
import { CarData } from './types/CarData';

export const CarContext = createContext<{
  cars: CarData[];
  setCars: Dispatch<SetStateAction<CarData[]>>;
}>({
  cars: [],
  setCars: () => {},
});

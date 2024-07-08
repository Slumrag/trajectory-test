import { createContext } from 'react';
import { CarData } from './types/CarData';

export const CarContext = createContext<CarData[]>([]);

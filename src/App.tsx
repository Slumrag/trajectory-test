import { useEffect, useState } from 'react';
import './App.css';
import { carsApi } from './api/api';
import { CarContext } from './store/store';
import { CarData } from './store/types/CarData';
import { CarList } from './components/CarList/CarList';
import { Container, CssBaseline } from '@mui/material';

function App() {
  const [cars, setCars] = useState<CarData[]>([]);
  useEffect(() => {
    carsApi.get('/vehicles').then((res) => setCars(res.data));
  }, []);

  return (
    <CssBaseline>
      <CarContext.Provider value={{ cars, setCars }}>
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
          <CarList />
        </Container>
      </CarContext.Provider>
    </CssBaseline>
  );
}

export default App;

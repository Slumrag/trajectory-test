import { useEffect, useState } from 'react';
import { carsApi } from './api/api';
import { CarContext } from './store/CarContext';
import { CarData } from './store/types/CarData';
import { CarList } from './components/CarList/CarList';
import { CircularProgress, Container, CssBaseline, Stack } from '@mui/material';
import { Footer } from './components/Footer';
import { CarMap } from './components/CarMap/CarMap';

function App() {
  const [cars, setCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    carsApi
      .get('/vehicles')
      .then((res) => setCars(res.data))
      .then(() => setLoading(false));
  }, []);

  return (
    <CssBaseline>
      <CarContext.Provider value={{ cars, setCars }}>
        <Container style={{ paddingTop: 50 }}>
          <Stack gap={4} alignItems={'center'} position={'relative'}>
            <CarMap />
            {loading ? <CircularProgress /> : <CarList />}
            <Footer></Footer>
          </Stack>
        </Container>
      </CarContext.Provider>
    </CssBaseline>
  );
}

export default App;

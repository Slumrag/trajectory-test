import { CircularProgress, Typography } from '@mui/material';
import { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CarContext } from '../../store/CarContext';
import { LatLngTuple } from 'leaflet';

export const CarMap = () => {
  const { cars } = useContext(CarContext);
  const centerSPB: LatLngTuple = [59.92976648519405, 30.346371230021028];
  return (
    <MapContainer
      center={centerSPB}
      zoom={10}
      scrollWheelZoom={false}
      placeholder={<CircularProgress />}
      style={{ width: '100%', height: 500, position: 'sticky' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {cars.map((e) => (
        <Marker key={e.id} position={[e.latitude, e.longitude]}>
          <Popup>
            <Typography component={'a'} href={`#${e.id}`}>{`${e.name} ${e.model}`}</Typography>
            <br />
            <Typography variant='caption'>{`${e.price} $`}</Typography>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

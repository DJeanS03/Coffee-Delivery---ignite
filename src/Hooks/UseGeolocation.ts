import { useState, useEffect } from 'react';

export function useGeolocation() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2134602e4220477e8063f884a2f34351`)
          .then((response) => response.json())
          .then((data) => {
            const city = data.results[0].components.city;
            const state = data.results[0].components.state_code;

            setLocation(`${city}, ${state}`);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return { location };
}
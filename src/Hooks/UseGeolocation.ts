import { useEffect, useState } from "react";

interface GeolocationData {
  results: {
    components: {
      city: string;
      state_code: string;
    };
  }[];
}

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

type GeolocationPositionError = {
  code: number;
  message: string;
};

type GeolocationResponse = GeolocationData | Error;

type GeolocationCallback = (position: GeolocationPosition) => void;

type GeolocationErrorCallback = (error: GeolocationPositionError) => void;

type UseGeolocationHook = {
  location: string;
};

export function useGeolocation(): UseGeolocationHook {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const successCallback: GeolocationCallback = (position) => {
      const { latitude, longitude } = position.coords;
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2134602e4220477e8063f884a2f34351`)
        .then((response) => response.json())
        .then((data: GeolocationData) => {
          const city = data.results[0].components.city;
          const state = data.results[0].components.state_code;

          setLocation(`${city}, ${state}`);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    const errorCallback: GeolocationErrorCallback = (error) => {
      console.log('Geolocation error:', error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return { location };
}

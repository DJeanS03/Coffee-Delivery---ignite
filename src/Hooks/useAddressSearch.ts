import { useState } from "react";
import axios from "axios";

interface AddressData {
  zip: string
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export const useAddressSearch = (): [
  AddressData | null,
  (cep: string) => void
] => {
  const [address, setAddress] = useState<AddressData | null>(null);

  const fetchAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;

      setAddress({
        zip: cep,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      });
    } catch (error) {
      console.error("Error while fetching address:", error);
      setAddress(null);
    }
  };

  return [address, fetchAddress];
};

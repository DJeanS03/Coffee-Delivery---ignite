import { useEffect, useState } from "react";
import { useAddressSearch } from "../../../../Hooks/useAddressSearch";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  const [cep, setCep] = useState("");
  const [address, fetchAddress] = useAddressSearch();

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedCep = event.target.value.replace(/\D/g, ""); // Removes all non-numeric characters

    if (formattedCep.length > 5) {
      formattedCep = formattedCep.slice(0, 5) + "-" + formattedCep.slice(5); // Inserts the "-" after the fifth number
    }

    setCep(formattedCep);
  };

  useEffect(() => {
    const cleanedCep = cep.replace("-", ""); // Remove "-" from zip code before doing address lookup

    if (cleanedCep.length === 8) {
      fetchAddress(cleanedCep);
    }
  }, [cep, fetchAddress]);

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        onChange={handleCepChange}
        pattern="\d{5}-?\d{3}"
        value={cep}
        maxLength={9}
      />
      <Input
        placeholder="Rua"
        className="street"
        value={address?.street}
        maxLength={8}
      />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" value={address?.neighborhood} />
      <Input placeholder="Cidade" value={address?.city} />
      <Input placeholder="UF" value={address?.state} />
    </AddressFormContainer>
  );
}

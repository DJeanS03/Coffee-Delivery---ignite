import { useEffect, useState } from "react";
import { useAddressSearch } from "../../../../Hooks/useAddressSearch";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

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

  //====================================================FORM VALIDATION=============================================================================
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP*"
        className="cep"
        /* onChange={handleCepChange}
        pattern="\d{5}-?\d{3}"
        value={cep}
        maxLength={9} */
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua*"
        className="street"
        value={address?.street}
        maxLength={8}
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número*"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        optional="Opcional"
      />
      <Input
        placeholder="Bairro*"
        value={address?.neighborhood}
        {...register("neighborhood")}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade*"
        value={address?.city}
        {...register("city")}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF*"
        value={address?.state}
        {...register("UF")}
        error={errors.UF?.message}
      />
    </AddressFormContainer>
  );
}

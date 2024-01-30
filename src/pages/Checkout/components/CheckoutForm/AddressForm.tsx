import { useEffect, useState } from "react";
import { useAddressSearch } from "../../../../Hooks/useAddressSearch";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import React from "react";

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
  const { register, formState, setValue } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedCep = event.target.value.replace(/\D/g, ""); // Removes all non-numeric characters

    if (formattedCep.length > 5) {
      formattedCep = formattedCep.slice(0, 5) + "-" + formattedCep.slice(5); // Inserts the "-" after the fifth number
    }

    setCep(formattedCep);
    setValue("cep", formattedCep); // Atualiza o valor do input manualmente
  };

  useEffect(() => {
    const cleanedCep = cep.replace("-", ""); // Remove "-" from zip code before doing address lookup

    if (cleanedCep.length === 8) {
      fetchAddress(cleanedCep);
    }
  }, [cep, fetchAddress]);

  useEffect(() => {
    setValue("cep", cep);
    setValue("street", address?.street || "");
    setValue("neighborhood", address?.neighborhood || "");
    setValue("city", address?.city || "");
    setValue("UF", address?.state || "");
  }, [setValue, address]);


  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP*"
        className="cep"
        onChange={handleCepChange}
        pattern="\d{5}-?\d{3}"
        value={cep}
        maxLength={9}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua*"
        className="street"
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
        {...register("neighborhood")}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade*"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF*"
        {...register("UF")}
        maxLength={2}
        error={errors.UF?.message}
      />
    </AddressFormContainer>
  );
}

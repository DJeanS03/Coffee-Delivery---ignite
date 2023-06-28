import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";

enum PaymentMethods {
  credit_card = "credit_card",
  debit_card = "debit_card",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o nome da rua"),
  number: zod.string().min(1, "Informe o número"),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  UF: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CheckOut() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();
  const { clearCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/purchaseConfirmation", {
      state: data,
    });
    clearCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}

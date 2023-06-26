import { ResumeSectionContainer } from "./styles";

export function ResumeSection() {
  return (
    <ResumeSectionContainer>
      <div>
        <p className="resumeSection__title">Total de itens</p>
        <p className="resumeSection__price">R$ 29,70</p>
      </div>
      <div>
        <p className="resumeSection__title">Entrega</p>
        <p className="resumeSection__price">R$ 3,50</p>
      </div>
      <div>
        <p className="resumeSection__total">Total</p>
        <p className="resumeSection__total">R$ 33,20</p>
      </div>

      <button className="resumeSection__button">CONFIRMAR PEDIDO</button>
    </ResumeSectionContainer>
  );
}

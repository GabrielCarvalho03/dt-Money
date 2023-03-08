import { Container } from "./styled";
import entradas from '../../assets/Entradas.svg'
import saídas from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import { useContext } from "react";
import { TransationContext } from "../context/TransationsContext";

export const Sumary = () => {
  const {transations} = useContext(TransationContext)

 const summary = transations.reduce((acc, transations)=>{
   
  if(transations.type == 'deposit'){
    acc.deposits += transations.value
    acc.total += transations.value
  } else{
    acc.withdrown += transations.value
    acc.total -= transations.value
  }
 return acc
 },{
  deposits: 0,
  withdrown:0,
  total:0
 })


  return (
    <Container>
      <div>
        <header>
            <p>Entradas</p>
            <img src={entradas} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency: 'BRL',
            }).format(summary.deposits)}</strong>
      </div>
 
      <div>
        <header>
            <p>Saídas</p>
            <img src={saídas} alt="Saídas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency: 'BRL',
            }).format(summary.withdrown)}</strong>
      </div>
      <div className="highlight-background">
        <header>
            <p>Total</p>
            <img src={total} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency: 'BRL',
            }).format(summary.total)}</strong>
      </div>
    </Container>
  );
};

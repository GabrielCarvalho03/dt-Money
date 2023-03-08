import { useContext } from "react";
import { Container } from "./style";
import { api } from "../services";
import { TransationContext } from "../context/TransationsContext";

interface apiTransations {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  date:string;
}

export const TransitionsTable = () => {
const {transations} = useContext(TransationContext)
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        {transations.map(transation =>(
            <tr>
            <td>{transation.title}</td>
            <td className={transation.type}> {new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency: 'BRL',
            }).format(transation.value)}</td>
            <td>{transation.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transation.date))}</td>
          </tr>
        ))}
         
        </tbody>
      </table>
    </Container>
  );
};

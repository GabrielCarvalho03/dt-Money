import Modal from "react-modal";
import { Container, TransitionTypeArea, TypeBox } from "./style";
import back from "../../assets/back.svg";
import Entradas from '../../assets/Entradas.svg';
import Saídas from '../../assets/Saídas.svg';
import { FormEvent, useContext, useState } from "react";
import { api } from "../services";
import { TransationContext } from "../context/TransationsContext";



type propsModal = {
  isOpen: boolean;
  requestClose: () => void;
};

export const NewTransitionModal = ({ isOpen, requestClose }: propsModal) => {

const [type,setType]= useState('deposit')
const [title,setTitle] = useState('')
const [value,setValue] = useState(0)
const [category,setCategory] = useState('')

const {CreateTrasition } = useContext(TransationContext)

const handleNewTrasition = async (event: FormEvent) => {
  event.preventDefault();

 await CreateTrasition({
    title,
    value,
    category, 
    type
  })

  setTitle('')
  setType('deposit')
  setValue(0)
  setCategory('')

  requestClose()
}



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={requestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleNewTrasition}>
        <button
          type="button"
          onClick={requestClose}
          className="react-close-modal"
        >
          <img src={back} alt="" />
        </button>
        <h2>Cadastrar transação</h2>

        <input 
        placeholder="Titulo"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}        
        />


        <input
         type="number" 
         placeholder="Valor"
         value={value}
         onChange={(e)=>setValue(Number(e.target.value))}        
         />

          <TransitionTypeArea>
            <TypeBox
             onClick={()=> setType('deposit')}
            type="button"
            isactive={type=='deposit'}
            activeColor="green"
            >
              <img src={Entradas} />
              <span>Entradas</span>
            </TypeBox>
            <TypeBox 
            onClick={()=> setType('withdrown')}
            type="button"
            isactive={type=='withdrown'}
            activeColor="red"
            >
              <img src={Saídas} />
              <span>Saídas</span>
            </TypeBox>
          </TransitionTypeArea>

        <input
        placeholder="Categoria" 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}        
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

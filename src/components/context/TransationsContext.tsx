import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services";


interface apiTransations {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    date:string;
  }
  interface TransationContextProps{
    children: ReactNode
  }

 type trasantionsPost = Omit<apiTransations, 'id' | 'date'>

interface TransactionsApidata {

  transations:apiTransations[],
  CreateTrasition: (transation: trasantionsPost)=> Promise<void>
}


export const TransationContext = createContext<TransactionsApidata>({} as TransactionsApidata )


export const TransationProvider = ({children}:TransationContextProps)=>{
    const [transations, setTransations] = useState<apiTransations[]>([]);

    useEffect(() => {
      api("transations").then((response) => setTransations(response.data.transations));
     
    }, []);

   const CreateTrasition = async (transationsInput:trasantionsPost)=>{
     
     const response = await api.post('/transations', {
      ...transationsInput,
      date: new Date()
     })
     const {transation } = response.data
     setTransations([
      ...transations,
      transation
     ])
    }
  return(

      <TransationContext.Provider value={{transations , CreateTrasition}}>
         {children}
    </TransationContext.Provider>
        )
}
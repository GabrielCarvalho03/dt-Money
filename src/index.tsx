import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Model, createServer } from "miragejs";


createServer({
  models:{
    transation:Model

  },
  seeds(server){
   server.db.loadData({
    transations: [
  
      {
      id:1,
      title:'desenvolvimento de site',
      value: 1000,
      type: 'deposit',
      category:'trabalho',
      date: new Date('2023/02/20'),
    },
    {
      id:2,
      title:'alugel',
      value: 1100,
      type: 'withdrown',
      category:'casa',
      date: new Date('2023/01/31 09:00:00'),
    },
  
  ]
    
   })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transations', ()=>{
      return this.schema.all('transation')
    })
    this.post('/transations', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transation',data)
    })
  }
})





const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

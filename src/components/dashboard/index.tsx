
import logo from "../../assets/logo.svg"
import { Sumary } from "../sumary"
import { TransitionsTable } from "../transitionsTable"
import { Container } from "./style"

export const Dashboard = ()=>{

return(
    <Container>
      <Sumary/>
      <TransitionsTable/>
    </Container>
)

}
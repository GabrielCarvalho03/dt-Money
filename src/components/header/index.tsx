import logo from "../../assets/logo.svg";
import { Container, Content } from "./style";

type HeaderProps = {
  onOpenNewTransitionModal: () => void;
};

export const Header = ({ onOpenNewTransitionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <button onClick={onOpenNewTransitionModal}>Nova transação</button>
      </Content>
    </Container>
  );
};

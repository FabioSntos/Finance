//aseets
import logoImg from "../../assets/logo.svg";

//styles
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Finance" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

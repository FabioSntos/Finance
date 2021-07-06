import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/2/2001</td>
          </tr>
          <tr>
            <td>internet</td>
            <td className="withdraw">R$ 160,00</td>
            <td>casa</td>
            <td>20/2/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

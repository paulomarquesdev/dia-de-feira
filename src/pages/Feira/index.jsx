import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from 'components/Produto';
import { NavBar } from './NavBar';
import { UserContext } from 'common/context/User';
import { useContext } from 'react';


export function Feira() {
  const { name, balance = 0 } = useContext(UserContext);

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {name}!</h2>
          <h3> Saldo: R$ {balance.toFixed(2)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )
}
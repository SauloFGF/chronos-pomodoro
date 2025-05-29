import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import MainTemplate from '../../templates/MainTemplate';

function Home() {
  // EXEMPLO DE MANIPULAÇÃO DE DADOS
  // function handleClick() {
  //   //sempre copio o objeto e depois mudo as propriedades
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       currentCycle: 8,
  //     };
  //   });
  // }

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

export default Home;

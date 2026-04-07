import { Container } from '../../components/Container';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

function Settings() {
    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p>
                    Modifique as configurações para tempo de foco, descanso curto e descanso longo.
                </p>
            </Container>

            <Container>
                <form action='' className='form'>
                    <div className='formRow'>
                        <DefaultInput id="workTime" labelText="Foco" />
                    </div>
                </form>
            </Container>

        </MainTemplate>
    );
}

export default Settings;

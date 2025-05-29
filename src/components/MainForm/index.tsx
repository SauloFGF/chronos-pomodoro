import { PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meus'
          type='number'
          placeholder='dITAGA'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayIcon />} />
      </div>
    </form>
  );
}

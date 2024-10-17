import {useState} from 'react';
import {Button, Stack} from '@chakra-ui/react';
import ChakraInput from './ChakraInput';
import ChakraSelect from './ChakraSelect';

export default function Chakra() {
  const [nom, setNom] = useState<string>('');

  return (
    <div>
      <h1>Chakra</h1>
      <Stack spacing={4} direction="row" align="center" margin={'1rem 0'}>
        <Button variant="primary" type="submit">
          {'Button '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            style={{width: 'var(--et-button-icon-size)', height: 'var(--et-button-icon-size)'}}
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="136"
              r="88"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></circle>
            <line
              x1="56"
              y1="32"
              x2="24"
              y2="64"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="200"
              y1="32"
              x2="232"
              y2="64"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <polyline
              points="128 80 128 136 184 136"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></polyline>
          </svg>
        </Button>
        <Button variant="primary-outline">Button</Button>
        <Button variant="primary" size="xl">
          Button xl
        </Button>
      </Stack>

      <ChakraInput
        value={nom}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}
        name={'nom'}
        placeholder={'Entrez votre nom'}
        label={'Nom'}
        error={nom.length < 3 && nom.length > 0}
        errorMessage={
          nom.length < 3 && nom.length > 0 ? 'Le nom doit contenir au moins 3 caractères' : ''
        }
      />

      <ChakraSelect
        value={nom}
        onChange={e => console.log(e.target.value)}
        name={'nom'}
        placeholder={'Choisissez une collection'}
        // multiple={true}
        error={false}
      />
      <ChakraSelect
        value={[]}
        onChange={e => console.log(e.target.value)}
        name={'collec'}
        placeholder={'Choisissez une collection'}
        multiple={true}
        error={false}
      />

    </div>
  );
}

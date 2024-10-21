import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Input from './components/Input';
import Select from './components/Select';
import { Box, Heading } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { TissotTheme } from './TissotTheme';

// eslint-disable-next-line react-refresh/only-export-components
const Demo = () => {
    const [username, setUsername] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <ChakraProvider theme={TissotTheme}>
            <Box maxW="600px" mx="auto" p="2rem" bg="gray.50" borderRadius="lg" boxShadow="lg">
                <Heading as="h1" fontSize="2xl" mb="4">
                  Composants Tissot Custom
                </Heading>

                <Box mb="6">
                    <Heading as="h2" fontSize="xl" mb="2">
                        Input
                    </Heading>
                    <Input
                        label="Username"
                        name="username"
                        value={username}
                        placeholder="Entrez votre nom"
                        onChange={(e) => setUsername(e.target.value)}
                        error={false}
                        errorMessage=""
                    />
                </Box>

                <Box mb="6">
                    <Heading as="h2" fontSize="xl" mb="2">
                        Select
                    </Heading>
                    <Select
                        name="options"
                        value={selectedOption}
                        placeholder="Selectionnez une option"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Demo />);

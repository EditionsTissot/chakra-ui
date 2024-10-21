# Chakra-ui with Editions Tissot styles

## Installation 
```bash 
npm install editions-tissot-chakra-ui
```

## Utilisation 
```bash 
import { ChakraProvider } from '@chakra-ui/react';
import { TissotTheme } from 'editions-tissot-chakra-ui';
import { Input, Select } from 'editions-tissot-chakra-ui';

function App() {
  return (
    <ChakraProvider theme={TissotTheme}>
      <Input label="Username" placeholder="Entrez votre nom" />
      <Select placeholder="Choisissez une option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    </ChakraProvider>
  );
}
```
## Nouveau composant 
- Créez nouveau composant dans src/components
- Faire l\'export dans index.ts
- Mettre a jour le dossier dist
- ```bash 
  npm run build
  ```
  ## Publier la bibliothèque
- Change version in pakage.json
- Publish
- 
```bash  
npm publish --access=public
```  


## Commande utiles 
```bash
npm run dev
npm run build
```
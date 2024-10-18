import {
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label: string;
  error?: boolean;
  errorMessage?: string;
}
export default function Input({
  label,
  name,
  value,
  placeholder,
  onChange,
  error = false,
  errorMessage = '',
}: InputProps) {
  return (
    <div className="et-form-group">
      <ChakraInput
        className={error ? 'et-has-error' : ''}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>

      {errorMessage && <span className="et-form-error-message">{errorMessage}</span>}
    </div>
  );
}

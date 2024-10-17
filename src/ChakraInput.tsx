import { Input, InputProps } from '@chakra-ui/react';

interface MyInputProps extends InputProps {
  label: string;
  error?: boolean;
  errorMessage?: string;
}
export default function ChakraInput({
  label,
  name,
  value,
  placeholder,
  onChange,
  error = false,
  errorMessage = '',
}: MyInputProps) {
  return (
    <div className="et-form-group">
      <Input
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

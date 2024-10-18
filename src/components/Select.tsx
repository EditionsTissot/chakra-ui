import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps ,
} from '@chakra-ui/react';

interface SelectProps extends ChakraSelectProps {
  error?: boolean;
  errorMessage?: string;
}
export default function Select({
  name,
  value,
  placeholder,
  onChange,
  size = 'md',
  error = false,
  errorMessage = '',
  multiple = false,
    children,
}: SelectProps) {
  return (
    <div className="et-form-group">
      <ChakraSelect
        className={error ? 'et-has-error' : ''}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        multiple={multiple}
        style={{width: '100%'}}
      >
        {children}
      </ChakraSelect>
      {errorMessage && <span className="et-form-error-message">{errorMessage}</span>}
    </div>
  );
}

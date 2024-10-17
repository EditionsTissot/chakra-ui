import {Select, SelectProps} from '@chakra-ui/react';

interface MyInputProps extends SelectProps {
  error?: boolean;
  errorMessage?: string;
}
export default function ChakraSelect({
  name,
  value,
  placeholder,
  onChange,
  size = 'md',
  error = false,
  errorMessage = '',
  multiple = false,
}: MyInputProps) {
  return (
    <div className="et-form-group">
      <Select
        className={error ? 'et-has-error' : ''}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        multiple={multiple}
        style={{width: '100%'}}
      >
        <option value="90000000-0000-0000-0000-000000000001">Nemesis A</option>
        <option value="90000000-0000-0000-0000-000000000005">Nemesis E</option>
        <option value="90000000-0000-0000-0000-000000000006">Nemesis F</option>
        <option value="90000000-0000-0000-0000-000000000007">Nemesis G</option>
        <option value="90000000-0000-0000-0000-000000000008">Nemesis H</option>
      </Select>
      {errorMessage && <span className="et-form-error-message">{errorMessage}</span>}
    </div>
  );
}

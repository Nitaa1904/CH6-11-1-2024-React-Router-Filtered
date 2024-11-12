import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

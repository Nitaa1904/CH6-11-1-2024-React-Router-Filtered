export const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
    />
  );
};

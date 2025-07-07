const InputFelid = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="block text-lg font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-secondary text-black w-full h-12 px-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bg focus:border-transparent"
      />
    </div>
  );
};

export default InputFelid;

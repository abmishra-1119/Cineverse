const InputField = ({ label, name, type = "text", placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
            className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
    </div>
);

export default InputField;
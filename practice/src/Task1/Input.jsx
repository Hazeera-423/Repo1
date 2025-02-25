import { useState } from "react";

const data = ["apple", "banana", "cherry", "orange", "papaya", "grapes"];

const Input22 = () => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);
    setFilteredData(data.filter(item => item.toLowerCase().includes(value)));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Search..." />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Input22;

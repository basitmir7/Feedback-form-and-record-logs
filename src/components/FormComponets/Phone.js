import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const Phone = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneInput
        defaultCountry="IN"
        value={value}
        onChange={setValue}
        required
      />
    </div>
  );
};

export default Phone;

import { useState } from "react";
import "./Formdata.css"


const Formdata = (make) => {
  const [focused,setFocused] = useState(false);
  const {label,errorMessage, onChange, id, ...inputMake} = make;
  const handleFocus = (e) => {
    setFocused(true);
  }
    return (
    <div className="formData">
      <label>{label}</label>
        <input {...inputMake} onchange={onChange} onBlur={handleFocus} focused={focused.toString()}  required />
        <span>{errorMessage}</span>
    </div>
  )
}

export default Formdata
import { useState } from "react";
import validator from "validator";

// ====== UI
import TextField from "@mui/material/TextField";

function PasswordValidator() {
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMsg("Good Password");
    } else {
      setErrorMsg("Weak Password");
    }
  };
  return (
    <>
      <span>Enter Password: </span>
      <input type="text" onChange={(e) => validate(e.target.value)} />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <br />
      {errorMsg === "" ? null : (
        <span style={{ color: "red" }}>{errorMsg}</span>
      )}
    </>
  );
}

export default PasswordValidator;
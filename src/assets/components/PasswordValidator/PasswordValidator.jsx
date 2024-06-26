import { useState } from "react";
import validator from "validator";

// ====== UI
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function PasswordValidator() {
  const [errorMsg, setErrorMsg] = useState("");
  const [minLen, setMinLen] = useState(false);
  const [minLow, setMinLow] = useState(false);
  const [minUpp, setMinUpp] = useState(false);
  const [minNum, setMinNum] = useState(false);
  const [minSym, setMinSym] = useState(false);
  const [progress, setProgress] = useState(0);

  // const validate = (value) => {
  //   console.log(value);
  //   // if (
  //   //   validator.isStrongPassword(value, {
  //   //     minLength: 8,
  //   //     minLowercase: 1,
  //   //     minUppercase: 1,
  //   //     minNumbers: 1,
  //   //     minSymbols: 1,
  //   //   })
  //   // ) {
  //   //   setErrorMsg("Good Password");
  //   // } else {
  //   //   setErrorMsg("Weak Password");
  //   // }

  //   // if (validator.isLength(value, { min: 8 })) {
  //   //   setMinLen(true);
  //   // } else if (validator.isLowercase(value)) {
  //   //   setMinLow(true);
  //   // } else {
  //   //   setMinLow(false);
  //   //   setMinLen(false);

  //   //   console.log(false);
  //   // }
  // };

  const validate = (value) => {
    console.log(value);

    // Check if the password meets the criteria
    const meetsLength = validator.isLength(value, { min: 8 });
    const meetsLowercase = validator.isLowercase(value);
    const meetsUppercase = validator.isUppercase(value);
    const meetsNumber = validator.isNumeric(value);
    const meetsSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(value);

    setMinLen(meetsLength);
    setMinLow(meetsLowercase);
    setMinUpp(meetsUppercase);
    setMinNum(meetsNumber);
    setMinSym(meetsSymbol);

    // Calculate overall progress (you can adjust this based on your preference)
    const totalCriteria = 5; // Total number of criteria
    const fulfilledCriteria = [
      meetsLength,
      meetsLowercase,
      meetsUppercase,
      meetsNumber,
      meetsSymbol,
    ].filter(Boolean).length;
    console.log(fulfilledCriteria);

    const newProgress = (fulfilledCriteria / totalCriteria) * 100;
    setProgress(newProgress);

    if (!value) {
      setMinLen(false);
      setMinLow(false);
      setMinUpp(false);
      setMinNum(false);
      setMinSym(false);
      setProgress(0);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="p" component="p" sx={{ mb: "1rem" }}>
            Password:
          </Typography>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            onChange={(e) => validate(e.target.value)}
          />
          {errorMsg === "" ? null : <Alert severity="error">{errorMsg}</Alert>}
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography variant="body" component="p">
            Must contain at least
          </Typography>

          <Typography variant="body2" component="p">
            {minLen === false ? <CloseIcon /> : <DoneIcon />}8 characters
          </Typography>
          <Typography variant="body2" component="p">
            {minLow === false ? <CloseIcon /> : <DoneIcon />}1 lowercase
            character
          </Typography>
          <Typography variant="body2" component="p">
            {minUpp === false ? <CloseIcon /> : <DoneIcon />}1 uppercase
            character
          </Typography>
          <Typography variant="body2" component="p">
            {minNum === false ? <CloseIcon /> : <DoneIcon />}1 number
          </Typography>
          <Typography variant="body2" component="p">
            {minSym === false ? <CloseIcon /> : <DoneIcon />}1 symbol
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default PasswordValidator;

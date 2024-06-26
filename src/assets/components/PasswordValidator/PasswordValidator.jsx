import { useState } from "react";

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
  const [strengthStatus, setStrengthStatus] = useState("");
  const [colorStatus, setColorStatus] = useState("");
  const [minLen, setMinLen] = useState(false);
  const [minLow, setMinLow] = useState(false);
  const [minUpp, setMinUpp] = useState(false);
  const [minNum, setMinNum] = useState(false);
  const [minSpc, setMinSpc] = useState(false);
  const [progress, setProgress] = useState(0);

  const validate = (value) => {
    const totalCriteria = 5;
    let fulfilledCriteria = 0;

    /* ==============================
    check Min 8 letters
    ============================== */
    const pattern1 = /.{8,}/; // min 8 letters
    const pattern2 = /[0-9]/; // numbers from 0-9
    const pattern3 = /[a-z]/; // letters from a-z (lowercase)
    const pattern4 = /[A-Z]/; // letters from A-Z (uppercase)
    const pattern5 = /[^A-Za-z0-9]/; // special characters

    /* ==============================
    check Min 8 letters
    ============================== */
    if (pattern1.test(value)) {
      console.log("Has Length");
      fulfilledCriteria += 1;
      setMinLen(true);
    } else {
      console.log("No length");
      setMinLen(false);
    }
    /* ==============================
    check the numbers from 0-9, It checks everywhere in the given value
    ============================== */
    if (pattern2.test(value)) {
      console.log("Has Number");
      fulfilledCriteria += 1;
      setMinNum(true);
    } else {
      console.log("No Number");
      setMinNum(false);
    }
    /* ==============================
    check letters from a-z (lowercase)
    ============================== */
    if (pattern3.test(value)) {
      console.log("Has Lowercase");
      fulfilledCriteria += 1;
      setMinLow(true);
    } else {
      console.log("No Lowercase");
      setMinLow(false);
    }
    /* ==============================
    check letters from A-Z (uppercase)
    ============================== */
    if (pattern4.test(value)) {
      console.log("Has Uppercase");
      fulfilledCriteria += 1;
      setMinUpp(true);
    } else {
      console.log("No Uppercase");
      setMinUpp(false);
    }
    /* ==============================
        check special characters
     ============================== */
    if (pattern5.test(value)) {
      console.log("Has Special");
      fulfilledCriteria += 1;
      setMinSpc(true);
    } else {
      console.log("No Special");
      fulfilledCriteria - 1;
      setMinSpc(false);
    }

    console.log(fulfilledCriteria);

    /* ==============================
        update progress
     ============================== */
    const newProgress = (fulfilledCriteria / totalCriteria) * 100;
    setProgress(newProgress);

    switch (fulfilledCriteria) {
      case 0:
        setStrengthStatus("");
        break;
      case 1:
        setStrengthStatus("weak");
        break;
      case 2:
        setStrengthStatus("fair");
        break;
      case 3:
        setStrengthStatus("good");
        break;
      case 4:
        setStrengthStatus("strong");
        break;
      case 5:
        setStrengthStatus("super strong");
        break;
      default:
        return null;
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
            {minSpc === false ? <CloseIcon /> : <DoneIcon />}1 symbol
          </Typography>
          {strengthStatus}
        </CardContent>
      </Card>
    </>
  );
}

export default PasswordValidator;

import { useState } from "react";

// ====== UI
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import IconButton from "@mui/material/IconButton";

import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LinearProgress from "@mui/material/LinearProgress";

function PasswordValidator() {
  const [showPassword, setShowPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [strengthStatus, setStrengthStatus] = useState("");
  const [colorStatus, setColorStatus] = useState("");
  const [minLen, setMinLen] = useState(false);
  const [minLow, setMinLow] = useState(false);
  const [minUpp, setMinUpp] = useState(false);
  const [minNum, setMinNum] = useState(false);
  const [minSpc, setMinSpc] = useState(false);
  const [progress, setProgress] = useState(0);

  const redC = "#b71c1c";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        setColorStatus(redC);
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
      <Card
        sx={{
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);",
        }}
      >
        <CardContent>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              sx={{ border: 0, outline: 0 }}
              disableUnderline={true}
              onChange={(e) => validate(e.target.value)}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {errorMsg === "" ? null : <Alert severity="error">{errorMsg}</Alert>}
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                color: "#1e1e1e",
              }}
            />
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

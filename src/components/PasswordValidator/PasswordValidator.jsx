import { useState } from "react";

// ====== UI
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
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

  const greyC = "#e0e0e0";
  const redC = "#d32f2f";
  const deepOrangeC = "#ff5722";
  const orangeC = "#ff9800";
  const yellowC = "#ffb300";
  const greenC = "#4caf50";

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
        setStrengthStatus("Weak");
        setColorStatus(redC);
        break;
      case 2:
        setStrengthStatus("Fair");
        setColorStatus(deepOrangeC);
        break;
      case 3:
        setStrengthStatus("Good");
        setColorStatus(orangeC);
        break;
      case 4:
        setStrengthStatus("Strong");
        setColorStatus(yellowC);
        break;
      case 5:
        setStrengthStatus("Super strong");
        setColorStatus(greenC);
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
        <CardContent sx={{ position: "relative" }}>
          <FormControl fullWidth variant="filled" sx={{ marginBottom: "1rem" }}>
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
          {/* {strengthStatus} */}
          {!strengthStatus ? (
            ""
          ) : (
            <Box
              position="absolute"
              right="1rem"
              bottom="1rem"
              bgColor={colorStatus}
            >
              <Chip
                variant="outlined"
                bgColor="inherit"
                size="small"
                label={strengthStatus}
              />
            </Box>
          )}
          <Typography variant="body2" component="p" mb={1}>
            Must contain at least
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            {minLen === false ? (
              <CloseIcon sx={{ color: redC }} />
            ) : (
              <DoneIcon sx={{ color: greenC }} />
            )}
            <Typography variant="body2" component="p">
              8 characters
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            {minLow === false ? (
              <CloseIcon sx={{ color: redC }} />
            ) : (
              <DoneIcon sx={{ color: greenC }} />
            )}
            <Typography variant="body2" component="p">
              1 lowercase character
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            {minUpp === false ? (
              <CloseIcon sx={{ color: redC }} />
            ) : (
              <DoneIcon sx={{ color: greenC }} />
            )}
            <Typography variant="body2" component="p">
              1 uppercase character
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            {minNum === false ? (
              <CloseIcon sx={{ color: redC }} />
            ) : (
              <DoneIcon sx={{ color: greenC }} />
            )}
            <Typography variant="body2" component="p">
              1 number
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            {minSpc === false ? (
              <CloseIcon sx={{ color: redC }} />
            ) : (
              <DoneIcon sx={{ color: greenC }} />
            )}
            <Typography variant="body2" component="p">
              1 symbol
            </Typography>
          </Stack>
        </CardContent>
        <Box
          sx={{
            width: "100%",
            color: colorStatus,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            color="inherit"
          />
        </Box>
      </Card>
    </>
  );
}

export default PasswordValidator;

import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const jsonData = [
  {
    id: 1,
    heading: "Engineer",
    subheading: ["Software", "Mechanical", "Electrical", "Civil"],
  },
  {
    id: 2,
    heading: "Doctor",
    subheading: ["General", "Specialist", "Surgeon", "Pediatrician"],
  },
  {
    id: 3,
    heading: "Artist",
    subheading: ["Visual", "Performing", "Musician", "Painter"],
  },
];

const IndeterminateCheckbox = () => {
  const [show, setShow] = React.useState<boolean[]>(() =>
    jsonData.map(() => false)
  );
  const [checked, setChecked] = React.useState<boolean[][]>(() =>
    jsonData.map((item) => item.subheading.map(() => false))
  );

  const handleChange = (index: number) => {
    const updateData = [...checked];
    const length: number = updateData[index].length;
    let count: number = 0;
    updateData[index].forEach((ele: boolean) => {
      if (ele == false) {
        count++;
      }
    });
    if (count !== length) {
      updateData[index] = updateData[index].map(() => false);
    } else {
      updateData[index] = updateData[index].map((sub) => (sub = !sub));
    }
    setChecked(updateData);
  };
  const toggleData = (row: number, col: number) => {
    const updateData = [...checked];
    updateData[row][col] = !updateData[row][col];
    setChecked(updateData);
  };
  useEffect(() => {
    console.log(show);
  });
  const handleOpen = (headIndex: number) => {
    const newShow = [...show];
    newShow[headIndex] = !newShow[headIndex];
    setShow(newShow);
  };

  return (
    <>
      {jsonData.map((item, headIndex) => (
        <>
          <Box display={"flex"} flexDirection={"row"}>
            <Button onClick={() => handleOpen(headIndex)}>
              {!show[headIndex] ? (
                <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
            <Box key={headIndex} marginLeft={"-20px"}>
              <FormControlLabel
                label={item.heading}
                control={
                  <Checkbox
                    checked={!checked[headIndex].includes(false)}
                    indeterminate={
                      checked[headIndex].includes(false) &&
                      checked[headIndex].includes(true)
                    }
                    onChange={() => handleChange(headIndex)}
                  />
                }
              />
            </Box>
          </Box>
          {show[headIndex] && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 3,
                paddingLeft: "40px",
              }}
            >
              {item.subheading.map((subitem, subIndex) => (
                <FormControlLabel
                  sx={{ width: "fit-content" }}
                  key={subIndex}
                  label={subitem}
                  control={
                    <Checkbox
                      checked={checked[headIndex][subIndex]}
                      onChange={() => toggleData(headIndex, subIndex)}
                    />
                  }
                />
              ))}
            </Box>
          )}
        </>
      ))}
    </>
  );
};
export default IndeterminateCheckbox;

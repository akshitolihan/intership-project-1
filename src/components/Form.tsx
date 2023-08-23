import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Data {
  name: string;
  phone: string;
  email: string;
}

interface Props {
  data: Data; // Specify Data type instead of object
  setData: React.Dispatch<React.SetStateAction<Data>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<Props> = ({
  data,
  setData,
  setIsLoggedIn,
  setLoading,
}) => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
    if (data.name !== "" && data.phone !== "" && data.email !== "") {
      setIsLoggedIn(true);
      setLoading(true);
      navigate("/data");
    }
    setData({ name: "", phone: "", email: "" });
  };

  return (
    <main className="flex justify-center">
      <Box display="flex" flexDirection="column" maxWidth={400}>
        <FormControl>
          <TextField
            onChange={handleChange}
            id="name"
            label="Name"
            variant="outlined"
            value={data.name}
            sx={{ padding: "4px", margin: "10px" }}
          />
          <TextField
            onChange={handleChange}
            id="phone"
            label="Phone"
            variant="outlined"
            type="text"
            value={data.phone}
            sx={{ padding: "4px", margin: "10px" }}
          />
          <TextField
            onChange={handleChange}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={data.email}
            sx={{ padding: "4px", margin: "10px" }}
          />
          <Box display="flex" justifyContent="center">
            <Button
              color="primary"
              sx={{
                backgroundColor: "blue",
                color: "white",
                width: "200px",
                padding: "10px",
                margin: "10px",
                "&:hover": {
                  backgroundColor: "blue",
                },
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>{" "}
          </Box>
        </FormControl>
      </Box>
    </main>
  );
};

export default Form;

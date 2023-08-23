import Form from "../components/Form";
import { Box, Button, Typography } from "@mui/material";
interface Data {
  name: string;
  phone: string;
  email: string;
}
interface Props {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({
  data,
  setData,
  setIsLoggedIn,
  isLoggedIn,
  loading,
  setLoading,
}) => {
  return (
    <>
      <Box display="flex" justifyContent={"center"} marginTop="150px">
        {!isLoggedIn && (
          <Form
            data={data}
            setData={setData}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            loading={loading}
            setLoading={setLoading}
          />
        )}
        {isLoggedIn && (
          <>
            <Box display="grid" justifyContent={"between"} marginTop="10px">
              <Typography variant="h2" component="h2">
                Your are LoggedIn
              </Typography>
              <Box display="flex" justifyContent={"center"} marginTop="30px">
                <Button
                  sx={{
                    backgroundColor: "red",
                    width: "100px",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "red",
                    },
                  }}
                  onClick={() => {
                    localStorage.setItem("data", "");
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DataGridBasic from "../components/DataGrid";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  const sample = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    { id: 2, firstName: "Jane", lastName: "Doe", age: 25 },
    { id: 3, firstName: "Alice", lastName: "Smith", age: 35 },
    { id: 4, firstName: "Bob", lastName: "Johnson", age: 40 },
    { id: 5, firstName: "Emily", lastName: "Davis", age: 28 },
  ];

  console.log(JSON.stringify(sample, "Home"));
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
            <Box width="100%" display="flex" justifyContent="center" mt={2}>
              <Button variant="contained">search</Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Stept9f4-R4"
              width="640px" // Default width
              height="360px" // Default height
              playing={true}
            />
          </Box>
          <Card>
            <CardHeader title="Basic" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
              <DataGridBasic data={sample} />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}

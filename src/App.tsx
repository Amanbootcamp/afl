import {
  Container,
  LinearProgress,
  Pagination,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import CalendarTable from "./components/CalendarTable/CalendarTable";
import useSeasonsCalendar from "./hooks/useSeasonsCalendar";

const urlSearchParams = new URLSearchParams(window.location.search);
const qPage: string | number = urlSearchParams?.get("page") || 0;
function App() {
  const [page, setPage] = useState<number | string>(qPage);
  const { data, pages, isLoading } = useSeasonsCalendar(page as number);

  const onPageChange = (page: number) => {
    const newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?page=" +
      page;
    window.history.pushState({ path: newurl }, "", newurl);
    setPage(page);
  };

  if (isLoading) return <LinearProgress />;
  return (
    <>
      {isLoading && <LinearProgress />}
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" marginY={5}>
          МАТЧИ
        </Typography>
        <CalendarTable data={data || []} />
        <Pagination
          count={pages}
          onChange={(_, page) => onPageChange(page)}
          defaultPage={+page}
          sx={{
            margin: "25px 0",
          }}
        />
      </Container>
    </>
  );
}

export default App;

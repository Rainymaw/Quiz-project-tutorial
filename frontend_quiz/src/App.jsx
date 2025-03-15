import Inscription from "./Pages/Inscription";
import Quiz from "./Pages/Quiz";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Typography, Button, Box } from "@mui/material";
import Connexion from "./Pages/Connexion";
import Protected from "./Components/Protected";
import Dashboard from "./Pages/Dashboard";
import AdminProtect from "./Components/AdminProtect";
import Home from "./Pages/Home";
import ListeQuiz from "./Pages/ListeQuiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: "row-reverse",
              padding: "10px",
            }}
          >
            <Button color="white" component={Link} to="/inscription">
              Inscription
            </Button>
            <Button color="white" component={Link} to="/connexion">
              Connexion
            </Button>
            <Button color="white" component={Link} to="/quiz">
              Quiz
            </Button>
            <Button color="white" component={Link} to="/categories">
              Categories
            </Button>
          </Box>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<ListeQuiz />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route element={<AdminProtect />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<Protected />}>
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

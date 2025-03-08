import Inscription from "./Pages/Inscription";
import Quiz from "./Pages/Quiz";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import Connexion from "./Pages/Connexion";
import Protected from "./Components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar>
          <Typography color="white">
            <Link to="/inscription">Inscription</Link>
          </Typography>
          <Typography color="white">
            <Link to="/quiz">Quiz</Link>
          </Typography>
        </AppBar>
        <Routes>
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route element={<Protected />}>
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

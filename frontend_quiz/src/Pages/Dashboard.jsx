import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Dashboard() {
  const [statistiques, setStatistiques] = useState({});
  useEffect(() => {
    getStats();
  }, []);
  const getStats = async () => {
    const response = await fetch("http://localhost:5678/api/admin/stats");
    const data = await response.json();
    setStatistiques(data.stats);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {/*Notre objectif ici c'est de récupérer le nombre d'utilisateurs et de questions
            et aussi le nombre de consultation par jour */}
      <div>
        <Card>
          <CardContent>
            <Typography variant="h4">Total quizzes number</Typography>
            <Typography variant="h2">{statistiques.totalQuiz}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Nombre d'utilisateurs</Typography>
            <Typography variant="h2">{statistiques.nbUsers}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Nombre de connexions par jour</Typography>
            <Typography variant="h2">{statistiques.nbConnexions} </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;

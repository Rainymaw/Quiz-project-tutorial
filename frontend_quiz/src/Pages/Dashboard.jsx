import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Cookies from "js-cookie";

function Dashboard() {
  const [statistiques, setStatistiques] = useState({});
  useEffect(() => {
    getStats();
  }, []);
  const getStats = async () => {
    const token = Cookies.get("token");
    const response = await fetch("http://localhost:5678/api/admin/stats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer : " + token,
      },
    });
    const data = await response.json();
    setStatistiques(data);
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
            <Typography variant="h2">{statistiques.nbQuestions}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Nombre d'utilisateurs</Typography>
            <Typography variant="h2">{statistiques.nbUsers}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h4">Nombre d'appels API</Typography>
            <Typography variant="h2">{statistiques.nbConnections}</Typography>
          </CardContent>
        </Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Dashboard;

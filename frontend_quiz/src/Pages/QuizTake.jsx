import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cookies from "js-cookie";
/* 
La page web contiendral es éléments suivants : 
-Afficher les questions 1 par 1
-Afficher les 4 réponses
-Sélectionner une des réponses
-Cliquer sur le bouton répondre
-Si la réponse est correcte, lui donner une couleur verte, sinon couleur rouge et couleur verte pour 
la bonne réponse,
-Une fois la réponse obtenu, bouton Next pour passer à la prochaine question
*/

function QuizTake() {
  let { category } = useParams();
  let [listeQuestions, setListeQuestions] = useState();
  useEffect(() => {
    let token = Cookies.get("token");
    getQuiz()
  }, []);
  const getQuiz = async()=>{
    
  }

  return <div></div>;
}

export default QuizTake;

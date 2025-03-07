const Question = require("../models/question");
const addQuestion = async (req, res) => {
  const { question, answers, correct, category } = req.body;
  if (question === "") {
    res.status(400).json({ message: "Vous n'avez pas crée la question" });
  }
  if (category === "") {
    res
      .status(400)
      .json({ message: "Vous n'avez pas sélectionné la catégorie" });
  }
  const newQuestion = new Question({
    question: question,
    answers: answers,
    correct: correct,
    type: category,
  });
  const savedQuestion = newQuestion.save();
  res.redirect("/api/question");
};

const getAddQuestionPage = (req, res) => {
  res.render("addQuestions");
};

const getAllQuestionsPage = async (req, res) => {
  const questions = await Question.find();
  console.log(questions);
  res.render("allQuestions", { questions: questions });
};

const getRandomQuestions = async (req, res) => {
  const questions = await Question.aggregate([
    { $sample: { size: 5 } },
    {
      $project: {
        _id: 1,
        question: 1,
        answers: 1,
        type: 1,
        points: 1,
      },
    },
  ]);
  console.log(questions);
  //Sélectionner 5 questions aléatoires
  res.render("randomQuestions", { questions: questions });
};

const getUpdatePage = async (req, res) => {
  //Pour récupérer un seul élément de la base de données
  //1-Récupérer le paramétre id de la barre de navigation
  //2-utilise Question.findById pour récupérer la question lié à cet identifiant
  //3-utiliser res.render() pour retourner une page EJS avec les informations contenus
  //dans question
  const { id } = req.params;
  const question = await Question.findById(id);
  console.log(question);
  res.render("updateQuestion", { question: question });
};

const updateQuestion = async (req, res) => {
  //1-Récupérer l'identifiant de l'URL
  const { id } = req.params;
  const { question, answers, correct, type } = req.body;
  const updated = await Question.findByIdAndUpdate(id, {
    question: question,
    answers: answers,
    correct: correct,
    type: type,
  });
  res.json({ message: "Element mis à jour" });
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  const deleted = await Question.findByIdAndDelete(id);
  res.json({ message: " élément supprimé" });
};

const getAllQuestions = async (req, res) => {
  const questions = await Question.find();
  console.log(questions);
  res.json({ questions: questions });
};

module.exports = {
  addQuestion,
  getAddQuestionPage,
  getAllQuestionsPage,
  getRandomQuestions,
  getUpdatePage,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
};

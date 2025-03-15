/*On va implémenter les 2 controlleurs qui sont associé à /question GET et /question POST
/question GET : fonction qui va afficher la page EJS addQuestion
/question POST : fonction qui va ajouter une nouvelle question à notre liste de questions
*/
const {
  getAddQuestionPage,
  addQuestion,
  getAllQuestionsPage,
  getRandomQuestions,
  getUpdatePage,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
  getCategories,
} = require("../controllers/quizControllers");

const { authorization } = require("../middleware/authentication");
const router = require("express").Router();

router.route("/question").get(getAddQuestionPage).post(addQuestion);
router.route("/all").get(getAllQuestionsPage);
router.route("/random-5").get(getRandomQuestions);
router.route("/question/update/:id").get(getUpdatePage).put(updateQuestion);
router.route("/question/delete/:id").delete(deleteQuestion);

router.route("/question/category").get(getCategories);

//Notre objectif est de sécuriser l'accés à cette route
router.route("/front/questions/all").get(authorization, getAllQuestions);

module.exports = router;

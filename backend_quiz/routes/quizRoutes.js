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
} = require("../controllers/quizControllers");
const router = require("express").Router();

router.route("/question").get(getAddQuestionPage).post(addQuestion);
router.route("/all").get(getAllQuestionsPage);
router.route("/random-5").get(getRandomQuestions);
router.route("/question/update/:id").get(getUpdatePage).put(updateQuestion);
router.route("/question/delete/:id").delete(deleteQuestion);

router.route("/front/questions/all").get(getAllQuestions);

module.exports = router;

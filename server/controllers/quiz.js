const Trivia = require('../models/quizModel');

// Function to fetch all quiz questions
async function getQuestions(req, res) {
    try {
      const quizQuestions = await Trivia.find({});
      console.log(quizQuestions)
      res.json(quizQuestions);
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
      res.status(500).json({ error: 'Failed to fetch quiz questions' });
    }
}


module.exports = {
  getQuestions, 
};

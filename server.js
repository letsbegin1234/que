const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const questions = {
    HEALTH: [
        "What are the benefits of regular exercise?",
        "How can you maintain a balanced diet?",
        "What are the symptoms of diabetes?",
        "What is mental health and why is it important?",
        "How does smoking affect your health?"
    ],
    EDUCATION: [
        "What are the benefits of online learning?",
        "How can technology be used in the classroom?",
        "What is the importance of early childhood education?",
        "How can students improve their study habits?",
        "What are the challenges in modern education?"
    ],
    TECHNOLOGY: [
        "What is blockchain technology?",
        "How does artificial intelligence work?",
        "What are the benefits of cloud computing?",
        "What is the Internet of Things (IoT)?",
        "How is technology changing the job market?"
    ],
    CRICKET: [
        "Who holds the record for the most runs in Test cricket?",
        "What are the basic rules of cricket?",
        "How is a cricket match won?",
        "What is the role of an umpire in cricket?",
        "Who are some of the greatest cricket players of all time?"
    ],
    GEOGRAPHY: [
        "What are the seven continents of the world?",
        "What is the longest river in the world?",
        "What are the different types of climates?",
        "How are mountains formed?",
        "What is the importance of the equator?"
    ]
};

app.get('/questions/:topic', (req, res) => {
    const topic = req.params.topic.toUpperCase();
    if (questions[topic]) {
        res.json(questions[topic]);
    } else {
        res.status(404).send('Topic not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

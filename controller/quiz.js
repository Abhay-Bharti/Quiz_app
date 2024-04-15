const user = require('../models/quiz');

async function handleQuestion(req, res) {
    try {
        const data = await user.find({}); // Wait for the database query to finish
        const all = data.map(item => ({
            ques: item.ques,
            options: [item.opt1, item.opt2, item.opt3, item.opt4],
            ans: item.ans
        }));

        // Send questions as JSON response
        res.send({ all });
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { handleQuestion };
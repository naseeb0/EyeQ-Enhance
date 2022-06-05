// server/index.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

const cohere = require('cohere-ai');
cohere.init('7T8CyRzn3Y6rAfPuN6NupkoG699NjvmCPuFiYp4s');

app.get('/api', async(req, res) => {
    const response = await cohere.generate('large', {
        prompt: '\"EyeQ-Enhance\"-  to help student revise their study.\n-\nTopic: C\nQ: Who is founder of C language?\n-\nTopic: C\nQ: When was C language developed?\n-\nTopic: Operating System\nQ: What is Semaphore?\n-\nTopic: Operating System\nQ: What is Critical Section?\n-\nTopic: Operating System\nQ: What is Mutex Lock?\n-\nTopic: Software Engineering\nQ: Why RAD model is perfered over Waterfall model?\n-\nTopic: Database\nQ: Mention any five DDL commands?\n-\nTopic:Database\nQ: What is DBMS?\n-\nTopic: Database\nQ: How many type of views in DBMS?\n-\nTopic: Database\nQ: What is difference between table and view?\n-\nTopic: Database\nQ: What is foreign key?\n-\nTopic: Database\nQ: What is primary key?\n-\nTopic: Database\nQ: What is unique key?\n-\nTopic: Database\nQ: What is transaction?\n-\nTopic: C\nQ: How do you define variable in C?\n-\nTopic: C\nQ: What are the types of variable in C?\n-\nTopic: C\nQ: What is dynamic memory allocation?\n-\nTopic: Software Engineering\nQ: Why RAD model is perfered over Waterfall model?\n-\nTopic: Software Engineering\nQ: What are the types of testing?\n-\nTopic: Software Engineering\nQ: What is System testing?\n-\nTopic: Software Engineering\nQ: What is unit testing?\n-\nTopic: Software Engineering\nQ: What is Integration testing?\n-\nTopic: Software Engineering\nQ: What is unit testing?\n-\nTopic: Software Engineering\nQ: What is difference between unit testing and integration testing?\n-\nTopic: Software Engineering\nQ: What is unit testing?\n-\nTopic: Software Engineering\nQ: What is integration testing?\n-\nTopic: Software Engineering\nQ: What is load testing?\n-\nTopic: Software Engineering\nQ: What is smoke testing?\n-\nTopic: Software Engineering\nQ: What is regression testing?\n-\nTopic: Software Engineering\nQ: What is scalability?\n-\nTopic: Software Engineering\nQ: What is load testing?\n-\nTopic: Software Engineering\nQ: What is load testing?\n-',
        max_tokens: 50,
        temperature: 0.6,
        stop_sequences: ['-'],
    });
    res.json(response.body);

});
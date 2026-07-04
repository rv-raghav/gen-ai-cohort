// npm i openai
import { OpenAI } from "openai";

const client = new OpenAI({
    apiKey: ''
});

client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: "user", content: "Hello, I am Raghav" }],
})
    .then((response) => {
        console.log(response.choices[0].message.content);
    });
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

// const messages: any[] = [{
//     role: "system",
//     content: "You are a helpful AI assitant."
// }];

export const getQuickResponse = async (messages: any[]) => {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.2-11b-vision-preview",
            temperature: 1,
            max_completion_tokens: 1024,
            top_p: 1,
            stream: false,
            stop: null
        });
        const answer = chatCompletion.choices[0].message.content;

        // local arr update
        messages.push({
            role: "assistant",
            content: answer
        });

        return messages;
    } catch (error) {
        alert(`Error - ${error}`);
    }
}

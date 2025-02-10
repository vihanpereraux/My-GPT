import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

const messages: any [] = [{
    role: "system",
    content: "You are a helpful AI assitant."
}];

export const getQuickResponse = async (prompt: string) => {
    try {
        // local arr update
        messages.push({
            role: "user",
            content: prompt
        });

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.3-70b-versatile"
        });
        const answer = chatCompletion.choices[0].message.content;        
        
        // local arr update
        messages.push({
            role: "assistant",
            content: answer
        });

        return answer as string;
    } catch (error) {
        alert(`Error - ${error}`);
    }
}

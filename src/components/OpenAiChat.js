import React, { useState } from "react";
import axios from "axios";

const OpenAIChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(process.env.PROJECT_KEY);
    try {
      const result = await axios.post(
        " https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini", // Update with the correct model as needed
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error: Could not fetch response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">OpenAI Chat</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default OpenAIChat;

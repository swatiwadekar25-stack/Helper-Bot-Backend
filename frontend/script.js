const jokeBtn = document.getElementById("jokeBtn");
const motivationBtn = document.getElementById("motivationBtn");
const tipBtn = document.getElementById("tipBtn");
const result = document.getElementById("result");


async function getAIResponse(endpoint) {
     result.innerText = "Thinking... 🤔";
try {
    const response = await fetch(
      `http://localhost:5000/${endpoint}`
    );
    
    const data = await response.json();

    if (!response.ok) {
            throw new Error(data.error);
        }

    result.innerText = data.content;

    } catch (error) {
        console.log(error);
        result.innerText = "Something went wrong!";
    }
}
jokeBtn.addEventListener("click", () => {
    getAIResponse("joke");
});
motivationBtn.addEventListener("click", () => {
    getAIResponse("motivation");
});
tipBtn.addEventListener("click", () => {
    getAIResponse("tip-of-the-day");
});



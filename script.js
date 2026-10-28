

const btn = document.getElementById("btn");
const resultCont = document.getElementById("resultcont");
const emailInput = document.getElementById("username");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");

    const email = emailInput.value.trim();
    if (!email) {
        resultCont.innerHTML = "<div>Please enter an email address.</div>";
        return;
    }

    const key = "ema_live_ITkV5Pqq40WNdMLdjqMZlNcb4AEBrNvWiSFd1MYE";
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${encodeURIComponent(email)}`;

    try {
        const res = await fetch(url);
        const result = await res.json();
        let str = "";

        for (const [key, value] of Object.entries(result)) {
            if(result[key] !== "" && result[key] !== " "){ 
            str += `<div>${key}: ${value}</div>`;
            }
        }

        console.log(str);
        resultCont.innerHTML = str;
    } catch (error) {
        console.error("Fetch error:", error);
        resultCont.innerHTML = "<div>Something went wrong while validating the email.</div>";
    }
});
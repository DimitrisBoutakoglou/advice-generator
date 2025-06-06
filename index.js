const adviceTxt = document.querySelector(".advice-text")
const adviceNumber = document.querySelector(".advice-number")

adviceSite()
async function adviceSite(){
    const response = await fetch("https://api.adviceslip.com/advice")

    try{
        if(!response.ok){
            throw new Error("Could not fetch data")
        }
        const data = await response.json()
        adviceTxt.innerHTML = "\"" + data.slip.advice + "\""
        adviceNumber.innerHTML = "ADVICE #" + data.slip.id
    }

    catch(error){
        console.error(error);
        
    }

}
document.addEventListener("DOMContentLoaded",()=>{
    quoteArray=["Be yourself; everyone else is already taken. ― Oscar Wilde",
                "Two things are infinite: the universe and human stupidity; and Im not sure about the universe.― Albert Einstein",
                "“So many books, so little time.― Frank Zappa",
                "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero",
                "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch"
                ]


    const textBox = document.querySelector(".textArea")
    const butt = document.querySelector(".randomButton")

    butt.style.marginTop="20px"
    butt.style.height="30px"  
    butt.style.width="200px"
    butt.style.borderRadius="4px"       


    textBox.style.width= "800px"
    textBox.style.height= "100px"
    textBox.style.fontSize="20px"
    textBox.value=randomQuote(quoteArray)
    currentId=0

    butt.addEventListener("click",()=>textBox.value=randomQuote(quoteArray))









    function randomQuote(array){
        let helper= array[Math.floor(Math.random()*array.length)]
        while(helper == textBox.value){
             helper= array[Math.floor(Math.random()*array.length)]
        }
        return helper
    }
})
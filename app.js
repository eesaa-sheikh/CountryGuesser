console.log("Console has Started")

const getCountryByAll = async () =>{

    console.log("Refresh ")

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.map((country) =>{

        const listCountry = document.createElement("ul");
    
         const toDoList = document.querySelector("#list");
        
        
         listCountry.textContent = "Name= " + country.name.common + " : " +" Population= " + country.population + " : "+
         "Flag = " + country.flag + ":" + "region" + country.region;
    
         toDoList.appendChild(listCountry);
         
})
}



const getCountryByName = async () =>{
//const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    console.log("input detected")


    const inputField = document.querySelector("#countrySearch");
    console.log(inputField.value);

    const response = await fetch(`https://restcountries.com/v3.1/name/${inputField.value}`);
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.map((country) =>{

    const listCountry = document.createElement("ol");

     const toDoList = document.querySelector("#list");
    
    
     listCountry.textContent = "Name= " + country.name.common + " : " +" Population= " + country.population + " : "+
     "Flag = " + country.flag + ":" + "region" + country.region;

     toDoList.appendChild(listCountry);


    })




}

const button = document.querySelector("button");

button.addEventListener("click", getCountryByName);

const meme = document.querySelector("#newButton");


meme.addEventListener("click",getCountryByAll);

console.log("Console has Started")

const getCountryByAll = async () =>{

    console.log("Refresh ")

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.map((country) =>{

        const listCountry = document.createElement("ul");
    
         const toDoList = document.querySelector("#list");
        
        
         listCountry.textContent = "Name: " + country.name.common + " : " +" Population: " + country.population +
         "Flag: " + country.flag;
    
         toDoList.appendChild(listCountry);
})
}


// const getCountryByAll = async () =>{

//     console.log("Refresh")

//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const jsonData = await response.json();
//     const conutrySection = document.querySelector("#countrySearch");
//     jsonData.map((country)=> 
//      {
//         const newThing = document.createElement("p");
//         newThing.textContent = "Name: " + country.name.comon
//      })
//   //  console.log(jsonData);

// }


const getCountryByName = async () =>{
//const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    console.log("input detected")


    const inputField = document.querySelector("#countrySearch");
    console.log(inputField.value);

    const response = await fetch(`https://restcountries.com/v3.1/name/${inputField.value}`);
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.map((country) =>{

    const listCountry = document.createElement("ul");

     const toDoList = document.querySelector("#list");
    
    
     listCountry.textContent = "Name= " + country.name.common + " : " +" Population= " + country.population + " : "+
     "Flag = " + country.flag + ":" + "region" + country.region;

     toDoList.appendChild(listCountry);


    })
    //display data

    //create ul and li data

    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
  
    // listCountry.textContent = JSON.stringify(jsonData, null, " ");

    // console.log(listCountry)

   // §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§




//    console.log(listCountry.flag)



//     toDoList.appendChild(listCountry);
//    // console.log ("Also with cute Corgi")
//     document.querySelector("li").appendChild(inputField.value);



}

const button = document.querySelector("button");

button.addEventListener("click", getCountryByName);

const meme = document.querySelector("#newButton");


meme.addEventListener("click",getCountryByAll);

// creating an input  field
// create a button









// function getCountries() {
//     const [countries, setCountries] = useState([]);
   
//     function handleCountryChange(countries) {
//      setCountries(countries);
//     }
   
//     useEffect(
//      debounce(async () => {
//       const data = await fetch(
//        "https://restcountries.eu/rest/v2/all?fields=name"
//       );
//       const countries = await data.json();
//       handleCountryChange(countries);
//      }, 2000)
//     );
   
//     return countries;
//    }

//    const button = document.querySelector("button");

// button.addEventListener("click", getCountries);
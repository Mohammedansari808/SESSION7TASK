let xml= new XMLHttpRequest()
let url ="https://restcountries.com/v2/all"

xml.onload= function (){
    let data1 = JSON.parse(xml.response)
       console.log(data1)
// Get all the countries from the Asia continent /region using the Filter function
    let asiaregion = data1.filter((ele)=>(ele.region == "Asia")).map((ele)=>ele.name)
    console.log(asiaregion)
// Get all the countries with a population of less than 2 lakhs using Filter function
    let populate = data1.filter((ele)=>ele.population < 200000).map((ele)=>ele.name)
    console.log(populate)
// Print the following details name, capital, flag using forEach function
    let NCF = data1.forEach((ele)=>console.log(`NAME : ${ele.name} CAPITAL : ${ele.capital} FLAG : ${ele.flag}`))
// Print the total population of countries using reduce function
    let totalPopu = data1.reduce((acc,cv)=>acc+cv.population,0)
    console.log(`POPULATION : ${totalPopu}`)
// Print the country which uses US Dollars as currency.
data1.filter(ele=>{
    
    for (let key in ele.currencies){
        if(ele.currencies[key].code==="USD"){
            console.log(ele.name)
        }
    }  
    
})



    
    
    
}





xml.open("GET",url);
xml.send()

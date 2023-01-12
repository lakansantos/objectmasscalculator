let mass = document.querySelector('#mass')
let button = document.querySelector('button')
let resultHeading = document.querySelector('.result > .resultH1')
let error = document.querySelector('.error')
let resultDiv = document.querySelector('.result')
let options = document.querySelectorAll('option')
let errorPlanet = document.querySelector('.errorPlanet')
let selected = document.querySelector('#selected')
let h1 = document.querySelector('.resultH1')
let h2 = document.querySelector('h2')
let imgContainer = document.querySelector('.imageContainer')





button.addEventListener('click', e=>{

    // backgroundurl('https://wallpapers-house.com/wp-content/uploads/wallpaper_674/wallpaper_0000121086.jpg') no-repeat center/cover rgba(0,0,0, .5);
    // background-blend-mode: darken ;
    error.style.margin  = '0'
    error.style.padding  = '0'
    error.style.float = 'left'

 
  
    // resultDiv.style.backgroundBlendMode='darken'
    if(mass.value===''||mass.value===undefined||mass.value===null){

        error.innerHTML='Please input a value'
    }
    else if(isNaN(mass.value)){
        error.innerHTML='Please enter a valid number'
    }
    else{
        error.innerHTML=''
    }


    if(selected.value==='selectPlanet'){
       errorPlanet.innerHTML='Please select a planet'
    }
    
    else if(selected.value==='mercury'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet1.calculateMass())

        resultDiv.style.backgroundBlendMode='darken'
        // const text = `<h1 class="resultH1"> The weight of an object in planet ${selected.value} is </h1>`
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/1086/1086084.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet1.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='venus'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet2.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/3594/3594270.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet2.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='earth'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet3.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/2590/2590242.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet3.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='mars'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet4.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/124/124582.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet4.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='jupiter'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet5.calculateMass())

        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/124/124558.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet5.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='saturn'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet6.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/3336/3336008.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet6.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='uranus'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet7.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/5570/5570629.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet7.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='neptune'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet8.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/360/360708.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet8.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else if(selected.value==='pluto'&&mass.value!==''&&mass.value!==null&&isNaN(mass.value)===false){
        console.log(planet9.calculateMass())
        resultDiv.style.backgroundBlendMode='darken'
        const text = `The weight of an object on planet ${selected.value.toUpperCase()} is`
        const image = `<img src="https://cdn-icons-png.flaticon.com/512/5570/5570636.png" alt="${selected.value}" class="planets">`
        h1.textContent=text
        h2.textContent=`${planet9.calculateMass()}N`
        let img = imgContainer.innerHTML= image
        errorPlanet.innerHTML=''
    }
    else{
        errorPlanet.innerHTML= ''
        console.log(selected.value)
    }
  
    
})


class Planet{
    constructor(planetName, multiplier){
        this.planetName = planetName;
        this.multiplier =multiplier
    }
    calculateMass =()=>{
        const newton = 9.8;
        let total = (mass.value * this.multiplier) * newton
        console.log(mass.value)
        return total.toFixed(2)
        
    }
     

}


const planet1 = new Planet('Mercury', 0.38)
const planet2 = new Planet('Venus', 0.91 )
const planet3 = new Planet('Earth', 1)
const planet4 = new Planet('Mars', 0.38)
const planet5 = new Planet('Jupiter', 2.34)
const planet6 = new Planet('Saturn', 1.06)
const planet7 = new Planet('Uranus', 0.92)
const planet8 = new Planet('Neptune', 1.19)
const planet9 = new Planet('Pluto', 0.06)



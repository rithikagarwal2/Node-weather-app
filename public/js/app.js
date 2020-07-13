

//console.log('i am done')



const we= document.querySelector('form')
const search= document.querySelector('input')
const mes1= document.querySelector('#message-1')
const mes2= document.querySelector('#message-2')
mes1.textContent='Loading..'
mes2.textContent=' '
we.addEventListener('submit',(e) => {

e.preventDefault()
const location= search.value
fetch('http://localhost:3000/weather?address='+location).then((response)=>{

  response.json().then((data)=>{
      if(data.error){
          mes1.textContent=data.error
      }
      else{
          mes1.textContent= data.summary

        mes2.textContent= data.weather_descriptions
      }
  })
})
console.log(location)
})
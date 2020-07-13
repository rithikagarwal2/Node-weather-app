const request= require('request')

const forcast= (longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=fa0715051653612815a5fef06163f57e&query='+latitude+','+longitude
    request({url:url,json:true},(error,respo)=>{

        if(error){
            callback('unable to connect',undefined)
        }
        else if(respo.body.error){
            callback('unable to find location',undefined)
        }
        else{
        
            callback(undefined,{
                summary:'It is currently '+respo.body.current.temperature+' degree out',
                temperature:'wind speed is '+respo.body.current.wind_speed,
                weather_descriptions: 'weather_descriptions ->'+ respo.body.current.weather_descriptions[0]
            })
        }
    })
  
}
module.exports= forcast
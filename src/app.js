const path= require('path')
const express= require('express')
const hbs = require('hbs')
const app= express()
const geocode= require('./utils/geocode')
const forecast  = require('./utils/forecast')

const join= path.join(__dirname,'../public')
const viewspath= path.join(__dirname,'../templates/views')
const partialpath= path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)
app.use(express.static(join))
app.get('',(req,res)=>{
    res.render('index',{
        title:'campoo cola',
        name: 'rithik'

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'campa cola',
        name: 'rithik'

    })
})
app.get('/help',(req,res)=>{
    if(!req.query.need){
        return res.send('pls specify need')
    }
    console.log(req.query.need)
    res.send({
        name: "Rithik Agarwal",
        age:"20"
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send('please provide address')
    }
    else{
         
        geocode(req.query.address,(error,data)=>{
            if(error){
                return res.send({error})
            }
         
            forecast(data.longitude,data.latitude,(error,data)=>{
                if(error){
                    return res.send({error})
                }
                
                res.send(data)
            })
        })
    }
})

app.get('*',(req,res)=>{
    res.send('my 404 error')
})
app.listen(3000,()=>{
    console.log('server is running')
})
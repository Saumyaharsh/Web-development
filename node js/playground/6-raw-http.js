const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=a3b96dbffbefc6d7d04e978959e5fc0e&query=37.8267,-122.4233&units=f'
const request = https.request(url,(response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        data = data + chunk.toString()
        

    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)

    })
})
request.on('error',(error)=>{
    console.log('An error',error)
})

request.end()
const geocode = require('./1-utils/geocode')
const forecast = require('./1-utils/forecast')
/*
Goal : Accept location via command line argument
1. Access the command line argument without yargs
2. Use the string value as input for geocode
3. Only geocode if a location is provided
4. Test your work with a couple of locations

*/





/*
console.log('Starting')
setTimeout(()=>{console.log('2 second timer')},2000)
setTimeout(()=>{console.log('0 second timer')},0)



console.log('Ending')

*/


/*
const request = require('request')
const url = 'https://api.weatherstack.com/current?access_key=a3b96dbffbefc6d7d04e978959e5fc0e&query=37.8267,-122.4233&units=f'

/*
request({url:url},(error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})
*/
/*

request({url:url,json:true},(error,response)=>{
    if(error){
        console.log('Error occured')
    }
    else if(response.body.error){
        console.log('Unable to find location')

    }
   
    else{
        console.log(response.body.current)
        console.log('Temperature '+response.body.current.temperature)
        console.log('Apparent temperature '+response.body.current.feelslike)
        console.log(response.body.current.weather_descriptions[0])
        }
   

    
})
*/

/*

//Error handling in geocoding

const request1 = require('request')

const url1 = 'https://geocode.maps.co/search?q=LosAngeles&api_key=6817369f567f2058803264fdm20e61c&format=json'
request1({url:url1,json:true},(error,response)=>{
   
    if(error){
        // low level os error
        console.log('Unable to connect to the internet ')
        
    }
    else if(response.body.error){
        console.log('Invalid input parameter')
    }
    else if(response.body.length==0){
        console.log('Unable to find location try another search')
    }
   
    
    else{

    const data = response.body
    const latitude = data[0].lat
    const longitude = data[0].lon
    console.log('Latitude of Los Angeles '+data[0].lat)
    console.log('Longitude of Los Angeles '+data[0].lon)
}

    
    
})
   
*/

const address = process.argv[2]
console.log(process.argv)
if(!address){
    return console.log('Please enter the address')
}
else{
geocode(address,(error,data)=>{
    if(error){
        return console.log(error)
    }
     /*
    // We donot need it
    console.log('Error',error) 
    */
    forecast(data.latitude,data.longitude,(error,forecastdata)=>{
        if(error){
           return console.log('Error',error)
        }
        console.log('Data',data)
        console.log('Data',forecastdata )

    })
})
}




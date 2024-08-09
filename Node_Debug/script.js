let axios = require('axios');
let url = "https://restcountries.com/v3.1/all";

axios.get(url).then(function (response){
    let countryList = response.data;
    let statusList = response.status;
    
    console.log(countryList);
    console.log(statusList);
}).catch(function (error){
    console.log(error);
});
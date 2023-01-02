import {countries} from './countries.js'

const name = process.argv[2];
const code = process.argv[3];

if(!name || !code) {
    console.log("Please provide name or code")
} else {
    const newCountry = {
        name, 
        code, 
    }
    countries.push(newCountry)
    console.log(countries[countries.length - 1])
}
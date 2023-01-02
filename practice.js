import {countries} from './countries.js'

const search = process.argv[2];

if(!search){
    console.log("Missing search argument")
} else {
    const result = countries.filter((country) => country.name.toLowerCase()[0] === search.toLowerCase())
    console.log(result)
}

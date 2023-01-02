import {countries} from './countries.js'

const search = process.argv[2]

console.log(search)

if(!search) {
    console.log("Missing search")
} else {
    const result = countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(result)
}

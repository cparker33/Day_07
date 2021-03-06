// code goes here :)


// #############################
//  Question 1 cItPrice
// #############################

var  cItPrice = (items.reduce(function(a, b) {

  return a + b.price 

}, 0) / items.length).toFixed(2)

document.querySelector("#answer1").innerHTML = `
The price is $${cItPrice}
`




// #############################
//  Question 2 cItPriceRange
// #############################


var cItPriceRange = items.filter(function(val) {
  
  if (val.price > 14.00 && val.price < 18.00) {

    return val

  }

}).map(function(val) {

    return val.title
})


var cAns2 = document.querySelector("#answer2")

var cAns2Str = ""

cItPriceRange.forEach(function(val){

  cAns2Str += (val + "<br><br>")

})

cAns2.innerHTML = cAns2Str;



// ############################# 
//  Question 3 **        &pound;
// console.log(cItGbp[0].title)
// console.log(cItGbp[0].price)
// #############################



var cItGbp = items.filter(function(val) { // filter for 'GBP'

  if (val.currency_code === "GBP") {

    return val

  }

}).map(function(val) { // map for title and price

    return { // return as object
      title: val.title,
      price: val.price
    }
})

var cAns3 = document.querySelector("#answer3")

var cAns3Str = ""

cAns3Str += (cItGbp[0].title)
cAns3Str += (" &pound;" + cItGbp[0].price)

cAns3.innerHTML = cAns3Str;



// ############################# 
//  Question 4 
// console.log(cItWood)
// #############################



var cItWood = items.filter(function(val) { 


  if (val.materials.includes('wood')) {

    return val

  }

}).map(function(val) {

    return val.title
})


var cAns4 = document.querySelector("#answer4")

var cAns4Str = ""

cItWood.forEach(function(val){

  cAns4Str += (val + " is made of wood.\n")

})





var cAns4 = document.querySelector("#answer4")

var cAns4Str = ""

cItWood.forEach(function(val){

  cAns4Str += (val + " is made of wood.\n")

})

cAns4.innerHTML = cAns4Str;





// ############################# 
//  Question 5 
// console.log(cIt8More[0].title)
// console.log(cIt8More[0].materials)
// console.log(cIt8More.length)
// #############################


var cIt8More = items.filter(function(val) { 


  if (val.materials.length >= 8) {

    return {
      title: val.title,
      materials: val.materials,
    }

  }


})


var cAns5 = document.querySelector("#answer5")


var cAns5Str = ""

cIt8More.forEach(function(val){

  cAns5Str += "\n"

  cAns5Str += (`${val.title} has ${val.materials.length} \n`)

    val.materials.forEach(function(val){

      cAns5Str += (`${val} \n`)

    })

})

cAns5.innerHTML = cAns5Str;





// ############################# 
//  Question 5 
//console.log(cItSelfMade)
// ############################# 

var cItSelfMade = items.filter(function(val) { 


  if (val.who_made === 'i_did') {

    return val

  }

}).length


document.querySelector("#answer6").innerHTML = `

${cItSelfMade} were made by their sellers.

`








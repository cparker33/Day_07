// code goes here :)

var  cItPrice = (items.reduce(function(a, b) {

  return a + b.price 

}, 0) / items.length).toFixed(2)

// #############################
//  Question 1 cItPrice
// #############################


var cItPriceRange = items.filter(function(val) {
  
  if (val.price > 14.00 && val.price < 18.00) {

    return val

  }

}).map(function(val) {

    return val.title
})

// #############################
//  Question 2 cItPriceRange
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

// call with index 0 and key


// ############################# 
//  Question 3 **        &pound;
// console.log(cItGbp[0].title)
// console.log(cItGbp[0].price)
// #############################

var cItWood = items.filter(function(val) { 


  if (val.materials.includes('wood')) {

    return val

  }

}).map(function(val) {

    return val.title
})

// ############################# 
//  Question 4 
// console.log(cItWood)
// #############################




var cIt8More = items.filter(function(val) { 


  if (val.materials.length >= 8) {

    return {
      title: val.title,
      materials: val.materials,
    }

  }


})


// ############################# 
//  Question 4 
// console.log(cItWood)
// #############################

/*
console.log(cIt8More[0].title)
console.log(cIt8More[0].materials)
console.log(cIt8More.length)
*/









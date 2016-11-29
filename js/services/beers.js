app.factory('beerService', function(){
  var beersArray = [
{
  beerName: 'Oakshire',
  beerStyle: 'Espresso',
  beerABV: '5%',
  beerImage: 'something'
},
{
  beerName: 'Ninkasi',
  beerStyle: 'Slayer',
  beerABV: '55%',
  beerImage: 'something else'
}

  ];
// Why is there an error when I remove this line?
return beersArray;
});


  // var beerObject = new Object();
  // beerObject.beersArray = beersArray;
  // beerObject.count = 2;
  // beerObject.AddBeer = function(beer){
  //   beersArray.push(beer);
  // };
// var beerObject = {beersArray:beersArray};






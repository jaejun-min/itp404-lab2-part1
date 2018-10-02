let resturantTemplateString = document.getElementById('resturant-template').innerHTML;
let renderResturant = Handlebars.compile(resturantTemplateString);
$('#results').html(
  'Loading...');
let promise = $.ajax({
  type: 'get',
  url: 'https://thejsguy.com/teaching/2018/api/restaurants.json'
});
promise.then(function(resturantProfile){
  console.log(resturantProfile);
  let renderedRest = renderResturant({
    rests : resturantProfile
  });
  $('#results').html(renderedRest);
},function(error){
  console.error(error);
});
// let renderedResturant = renderResturant({
//   rests: resturantProfile
//   $('#results').html(renderedResturant);
// }), function(error){
//   console.log('error', error);
//   console.error('an error occured');
//
// }

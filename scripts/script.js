$('#submit-button').on('click',function(){
    event.preventDefault();
    console.log('123')
var qwerty=$('#search-term').val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "783886156add4b1d8d685b8032d46ccc",
'q':qwerty,
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
   console.log(result)
   $('#top-articles').append(JSON.stringify(result))
}).fail(function(err) {
  throw err;
});
})

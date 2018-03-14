

var timesUrl = "https://api.nytimes.com/svc/topstories/v2/national.json";
timesUrl += '?' + $.param({
  'api-key': "8d84f70d24e349c3a57c9886c3eddaf8",
  'callback': "stories"
});
$.ajax({
  url: timesUrl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

};
});

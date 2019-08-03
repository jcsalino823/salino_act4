document.getElementById('get-trivia').onclick = btnclick;
function btnclick() {
$.ajax({
        method: 'get',
        url: 'http://numbersapi.com/random/year?json',
        complete: function(data){
            var response = data.responseJSON;
            var items = response.number;
            console.log(items);
        }
    }).then(function(res){
       console.log(res);
    })
}
  //Do crazy stuffs here ... 

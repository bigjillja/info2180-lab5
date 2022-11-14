window.onload = function(){
    var lookupBtn = document.getElementById("lookup");
    var cityBtn = document.getElementById("cities")
    var results = document.getElementById("result");
    var country = document.getElementById("country");
    var request = new XMLHttpRequest();

    lookupBtn.addEventListener('click', element);
    cityBtn.addEventListener('click', element2);

    function element(e){
        e.preventDefault();
        var url = "world.php?country=" + country.value + "&context=countries";
        request.onreadystatechange = fetch;
        request.open('GET', url, true);
        request.send();
    }

    function element2(e2){
        e2.preventDefault();
        var url = "world.php?cities=" + country.value + "&context=cities";
        request.onreadystatechange = fetchcities;
        request.open('GET', url, true);
        request.send();
    }

    function fetch(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var response = request.responseText;
                results.innerHTML = response;
            }
            else{
                results.innerHTML = "Error: This request can not be delivered. Please try again.";
            }
        }
    }

    function fetchcities(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var response = request.responseText;
                results.innerHTML = response;
            }
            else{
                results.innerHTML = "Error: This request can not be delivered. Please try again.";
            }
        }
    }
}
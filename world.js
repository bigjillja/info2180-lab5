window.onload = function(){
    var lookupBtn = document.querySelector("#lookup");
    var results = document.querySelector("#results");
    var query = document.querySelector("input");
    var request = new XMLHttpRequest();

    lookupBtn.addEventListener('click', element);

    function element(e){
        e.preventDefault();
        var url = "world.php?query=" + query.value;
        request.onreadystatechange = fetch;
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
}
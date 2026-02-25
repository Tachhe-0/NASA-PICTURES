var start = document.getElementById('start');
var date = document.getElementById('date-of-img');
var image = document.getElementById('img');

var fetch_url = "https://api.nasa.gov/planetary/apod?api_key=wmjrMmhJ3yDZTXmyrjQxc08ApJgikfsL2M8ZgxGu&date=";

start.addEventListener('click',

    () => 
    {
        console.log('<br>', 'Input_value: ', date.value, "<br>");
        console.log('<br>', 'fetch_url: ', fetch_url, "<br>");

        fetch(fetch_url + date.value).then((obj) =>
        {
            console.log("Your obj: ", obj);

            return json = obj.json();

        })
        .then((json) =>
            {
                console.log('Ответ от NASA в виде JSON: ', json);

                console.log('URL картинки: ', json.url);

                image.setAttribute('src', json.url);
            }
            )
        .finally(()=>
            {console.log("/////END/////")}
            )

    }

)
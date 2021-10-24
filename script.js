/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//task 4
/*
$.get("https://jsonkeeper.com/b/VST9", function(json_objects) {
    for (object of json_objects) {
        let section = $('<section>');
        let div = $('<div>');
        let p = $('<p class="grey">');
        
        let date = $('<p>').text(object.creationTime);

        let faceImage = new Image();
        faceImage.src = object.pathToFacePicture;
        //faceImage.className = object.
        p.append(faceImage);
        p.append(date);

        let pContent = $('<p>').text(object.bodyOfPost);

        div.append(p);
        if (object.pathToBodyPicture != null) {
            let bodyImage = new Image();
            bodyImage.src = object.pathToBodyPicture;
            bodyImage.className = object.classOfPicture;
            div.append(bodyImage);
        }
        div.append(pContent);

        
        let buttonClass = object.classOfButton;
        $(div).append(
            $(document.createElement('button')).prop({
                type: 'button',
                class: buttonClass
            })
        )

        section.append(div);

        $('body').append(section);
    }
})
.fail (function(msg) {
	alert("Please enable CORS (by installing corresponding extension)");
})
*/

//task 5
//run a local web server to retrieve data from a local file
//to run web server open cmd in project directory
//type a command: python -m http.server (for python version 3) or 
//                python -m SimpleHTTPServer (for python version 2)
//output will be something like: "Serving HTTP on :: port 8000 (http://[::]:8000/)"
//open browser and type "localhost:" and number of port
//for example in this case: "localhost:8000"
$.get("hw2.json", function(json_objects) {
    for (object of json_objects) {
        let section = $('<section>');
        let div = $('<div>');
        let p = $('<p class="grey">');
        
        let date = $('<p>').text(object.creationTime);

        let faceImage = new Image();
        faceImage.src = object.pathToFacePicture;
        //faceImage.className = object.
        p.append(faceImage);
        p.append(date);

        let pContent = $('<p>').text(object.bodyOfPost);

        div.append(p);
        if (object.pathToBodyPicture != null) {
            let bodyImage = new Image();
            bodyImage.src = object.pathToBodyPicture;
            bodyImage.className = object.classOfPicture;
            div.append(bodyImage);
        }
        div.append(pContent);

        
        let buttonClass = object.classOfButton;
        $(div).append(
            $(document.createElement('button')).prop({
                type: 'button',
                class: buttonClass
            })
        )

        section.append(div);

        $('body').append(section);
    }
})
.fail (function(msg) {
	alert("Please enable CORS (by installing corresponding extension)");
})

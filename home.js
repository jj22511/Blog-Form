function postBlog(){
		var	Title = document.getElementById("title").value;
		var	FirstName = document.getElementById("firstname").value;
		var	LastName = document.getElementById("lastname").value;
		var	Content = document.getElementById("content").value;

		document.getElementById("post-title").innerHTML = Title;
		document.getElementById("post-author").innerHTML = FirstName + " " + LastName;
		document.getElementById("post-content").innerHTML = Content;
	}


function clearBox(){
		var	Title = document.getElementById("title").value;
		var	FirstName = document.getElementById("firstname").value;
		var	LastName = document.getElementById("lastname").value;
		var	Content = document.getElementById("content").value;

		document.getElementById("post-title").innerHTML = "";
		document.getElementById("post-author").innerHTML = "";
		document.getElementById("post-content").innerHTML = "";

	}
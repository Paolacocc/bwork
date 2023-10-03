const pageTitle = "BWork";

// create an object that maps the url to the template, title, and description
const routes = {
	404: {
		template: "/components/404.html",
		title: "404 | " + pageTitle,
		description: "Page not found",
	},
	"/": {
		template: "components/homepage.html",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	registration: {
		template: "components/registration.html",
		title: "registration | " + pageTitle,
		description: "Registration page",
	},
	forgottenpsw: {
		template: "components/forgottenpsw.html",
		title: "Contact Us | " + pageTitle,
		description: "Forgotten password page",
	},
    messages: {
		template: "components/messages.html",
		title: "Messages | " + pageTitle,
		description: "Messages page",
	},
	messagesdetails: {
		template: "components/messagesdetails.html",
		title: "MessagesDetails | " + pageTitle,
		description: "Messages details page",
	},
	newchat: {
		template: "components/newchat.html",
		title: "NewChat | " + pageTitle,
		description: "New chat page",
	},

};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
	// get the url path, replace hash with empty string
	let location = window.location.hash.replace("#", "");
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
    
	// get the route object from the routes object
	const route = routes[location] || routes["404"];
	// get the html from the template
    
	const html = await fetch(route.template).then((response) => response.text());

	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();

const changeRoute = (url) => {
    window.location.hash = url
}

//filter 
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  }
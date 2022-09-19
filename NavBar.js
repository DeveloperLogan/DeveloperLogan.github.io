var navbar = document.getElementById("navbar");
var title = document.title;


var css = `
<style>
nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

}
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
  
nav li {
    float: left;
    display: inline;
}
  
nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
  
nav li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #702963;
}

</style>
`;


var htmlHome = `
<nav>
    <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
    </ul>
<nav>
`;

var htmlContact = `
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a class="active" href="/Contact">Contact</a></li>
    </ul>
<nav>
`;

if (title == "Home"){
    navbar.outerHTML = css+htmlHome;
} else if (title == "Contact") {
    navbar.outerHTML = css+htmlContact;
}

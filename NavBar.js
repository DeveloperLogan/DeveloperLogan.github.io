var navbar = document.getElementById("navbar");


var css = `
<style>
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: sticky;
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
  
nav li a:hover {
    background-color: #111;
}

</style>
`;


var html = `
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
    </ul>
<nav>
`;


navbar.outerHTML = css+html;
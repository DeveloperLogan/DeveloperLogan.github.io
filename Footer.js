var footer = document.getElementById("Footer");


var css = `
<style>
footer {
    height: 100px;
    background-color: #333;
}

footer h3 {
    color : white;
}
</style>
`;


var html = `
<footer>
<h3>hello world</h3>
</footer>
`;


footer.outerHTML = css+html;
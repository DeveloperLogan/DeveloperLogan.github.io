var footer = document.getElementById("Footer");


var css = `
<style>
footer {
    height: 100px;
    background-color: #333;
}

footer p1 {
    color : white;
    align: center;
}
</style>
`;


var html = `
<footer>
<p1>hello world</p1>
</footer>
`;


footer.outerHTML = css+html;
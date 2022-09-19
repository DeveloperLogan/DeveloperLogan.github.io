var footer = document.getElementById("Footer");


var css = `
<style>
footer {
    height: 100px;
    background-color: #333;
}
</style>
`;


var html = `
<footer>
<h1>hello world</h1>
</footer>
`;


footer.outerHTML = css+html;
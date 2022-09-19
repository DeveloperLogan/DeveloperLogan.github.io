var header = document.getElementById("Header");


var css = `
<style>
header {
    margin: 0;
    overflow: hidden;
    padding: 0;
    background-color: black;
}

header img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;

}
</style>
`;


var html = `
<header>
    <img src="/static/imgs/DevLoganLogo.png" alt="DevLogan">
</header>
`;


header.outerHTML = css+html;
function load_home () {
    fetch("https://generatinog.info/28_1/index.php" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 
load_home();

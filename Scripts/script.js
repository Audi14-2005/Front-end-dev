function loadHTML(filename, elementId) {
    const basePath =  '../header-footer/'
    const filePath = basePath + filename; 
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}, status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        })
        .catch(error => console.error('Error loading file:', error));
}
window.onload = function () {
    loadHTML('navbar.html', 'navbar');    
    loadHTML('footer.html', 'footer');
};


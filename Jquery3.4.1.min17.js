// Simulated user credentials
const validUsername = "admin";
const validPassword = "1256";

// Pre-attached files (in reality, you could fetch this from a server)
const files = [
    { name: "pdf.txt", url: "pdf" },
    { name: "data.txt", url: "data" },
    { name: "my.txt", url: "my" },
    { name: "files.txt", url: "files" },
    { name: "Report.xlsx", url: "Report.xlsx" },
    { name: "Presentation.pptx", url: "Presentation.pptx" },

];

// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        // Hide login section and show file section
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('fileSection').style.display = 'block';
        
        // Display the list of files
        displayFiles();
    } else {
        document.getElementById('errorMsg').innerText = "Invalid username or password!";
    }
});

// Display the pre-attached files
function displayFiles() {
    const fileList = document.getElementById('fileList');
    
    files.forEach(file => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${file.url}">${file.name}</a>`;
        fileList.appendChild(listItem);
    });
}

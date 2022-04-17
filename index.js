// Clicks on button to toggle between hiding and showing the dropdown
function opensidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("active");
    sidebar.classList.remove("no-show");
}

// Close the dropdown when click on close button
function closesidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("no-show");
    sidebar.classList.remove("active");
}
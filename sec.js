// Disable right-click on the page
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable specific keyboard shortcuts for developer tools
document.addEventListener('keydown', function (e) {
    // Prevent F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Prevent Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

// Disable dragging of content
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

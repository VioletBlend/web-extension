// Handle any iframe-related functionality
document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('instaFrame');
  
  // Add error handling
  iframe.onerror = function() {
    console.error('Failed to load instagram content');
  };
});
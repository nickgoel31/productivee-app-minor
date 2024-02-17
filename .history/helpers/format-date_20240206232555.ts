function formatDate(dateString) {
    if (!dateString) return ""; // return empty string if dateString is falsy
  
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // assuming 'en-US' locale
  }
  
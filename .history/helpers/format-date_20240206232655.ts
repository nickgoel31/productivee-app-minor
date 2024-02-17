interface Workspace {
    createdAt: string; // Assuming createdAt is a string representing a date
  }
  
  function formatDate(dateString: string | undefined): string {
    if (!dateString) return ""; // return empty string if dateString is falsy
  
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options); // assuming 'en-US' locale
  }
  
function debounce(func, delay) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
        timerId = null;
      }, delay);
    };
  }
  
  function apiRequest() {
    console.log('Debounced function executed!');
  }
  
  const debouncedFunction = debounce(apiRequest, 500);
  
  debouncedFunction();
  
  setTimeout(() => debouncedFunction(), 100);
  setTimeout(() => debouncedFunction(), 200);
  setTimeout(() => debouncedFunction(), 400);
  
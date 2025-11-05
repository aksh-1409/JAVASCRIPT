const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    console.log("Response status:", response.status); // Debug log
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error caught:", error.message);
  });

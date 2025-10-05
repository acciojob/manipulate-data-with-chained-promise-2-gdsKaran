//your JS code here. If required.
const output = document.getElementById("output");

// Initial promise that resolves after 3 seconds with the array [1, 2, 3, 4]
new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
})
  // First transformation: filter even numbers with 1-second delay
  .then((arr) => {
    return new Promise((resolve) => {
      const evenArr = arr.filter((num) => num % 2 === 0);
      setTimeout(() => {
        output.textContent = evenArr; // Display [2, 4]
        resolve(evenArr);
      }, 1000);
    });
  })
  // Second transformation: multiply by 2 with 2-second delay
  .then((evenArr) => {
    return new Promise((resolve) => {
      const doubledArr = evenArr.map((num) => num * 2);
      setTimeout(() => {
        output.textContent = doubledArr; // Display [4, 8]
        resolve(doubledArr);
      }, 2000);
    });
  });

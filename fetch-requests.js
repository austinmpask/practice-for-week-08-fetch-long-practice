/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */
const url1 = "/products";

const body = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery",
});

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};

const options1 = {
  method: "POST",
  body: body,
  headers: headers,
};
const response = await fetch(url1, options1);
console.log(response);
console.log(response.status);
console.log(response.headers.get("content-type"));
console.log(response.url);

// Your code here

/* ============================== Phase 2 ============================== */

// Your code here

/* ============================== Phase 3 ============================== */

// Your code here

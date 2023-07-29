var addDays = require("date-fns/addDays");

let maturityDate = addDays(new Date(2023, 06, 29), 330);

console.log(maturityDate);

// 2024-06-23

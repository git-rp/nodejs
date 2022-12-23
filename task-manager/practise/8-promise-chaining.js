const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// below Not a good practise for promise chaining
// add(1, 3)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 3)
//       .then((sum) => {
//         console.log(sum);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Proper promise chaining
add(1, 3)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log('sum2 ', sum2);
  })
  .catch((e) => {
    console.log(e);
  });

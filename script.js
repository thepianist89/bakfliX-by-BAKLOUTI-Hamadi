console.log('Hello from the js page');
// SPLIDE JS SLIDES: the Upcoming Movies SEC
// var splide = new Splide('.Upcoming_Movies_Splides', {
//   type: 'loop',
//   perPage: 4,
//   perMove: 1,
//   gap: '3rem',
//   loop: true,
//   pagination: false,
//   autoplay: true,
//   breakpoints: {
//     1100: {
//       perPage: 3.5,
//     },
//     1000: {
//       perPage: 3,
//     },
//     768: {
//       perPage: 2.5,
//     },
//     500: {
//       perPage: 2,
//     },
//   },
// });

// splide.mount();
// Start BIG MOVIES SLIDER/*/*/*/*/*/*/*/*/*///*/*/*/
var splide = new Splide('.movies_Splides', {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '2rem',
  loop: true,
  pagination: false,
  autoplay: {
    delay: 1500,
  },
});

splide.mount();
// End BIG MOVIES SLIDER/*/*/*/*/*//**/*/*///*/*//*/
console.log('fuck bro');

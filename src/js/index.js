//const questionItems = document.querySelectorAll('.text-questions');

// questionItems.forEach((question) => {
//   const icon = question.querySelector('img');
//   if (icon) {
//     icon.src = './src/images/icon-plus.svg';
//   }

//   question.addEventListener('click', () => {
//     const description = question.nextElementSibling;
//     const isOpen = description.classList.contains('active');

//     questionItems.forEach((item) => {
//       const desc = item.nextElementSibling;
//       const img = item.querySelector('img');
//       desc.classList.remove('active');
//       if (img) {
//         img.src = './src/images/icon-plus.svg';
//       }
//     });

//     if (!isOpen) {
//       description.classList.add('active');
//       if (icon) {
//         icon.src = './src/images/icon-minus.svg';
//       }
//     }
//   });
// });

const questItems = document.querySelectorAll('.text-questions');

questItems.forEach((quest) => {
  const icon = quest.querySelector('img');
  if(icon){
    icon.src = './src/images/icon-plus.svg';
  }

  quest.addEventListener("click", () => {
      const description = quest.nextElementSibling;
      const isOpen = description.classList.contains("active");

      questItems.forEach((item) => {
         const desc = item.nextElementSibling;
         const img = item.querySelector('img');
         desc.classList.remove('active');

         if(img){
            img.src = './src/images/icon-plus.svg';
         }
      });

      if(!isOpen){
        description.classList.add('active')
        if(icon){
          icon.src = './src/images/icon-minus.svg';
        }
      }
  });

});










const faqItems = document.querySelectorAll('.enquiry');

faqItems.forEach(item => {
  item.querySelector('.enquiry_btn').addEventListener('click', () =>{

    const alreadyOpen = item.classList.contains('open')

    faqItems.forEach(i=> i.classList.remove('open') )

    if(!alreadyOpen) {
    item.classList.add('open')
   }
  })
});

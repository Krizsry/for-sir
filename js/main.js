
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Hi sir, first of all i want to thank you for teaching me and my other classmates on the subject ICT marami po kaming natutunan dahil sainyo; thankful po ako na meron po kaming natangap na magaling na practice teacher and di masungit and strict. Sana sa future po gawa po tayo laro or software ako na po sa backend or front end kahit ano kakayanin. Thats all ayaw ko pahabain baka di na kasya sa screen ayun lang po thank you!! thankyou for teaching me!! I wish you well! GOOD LUCK PO SA JOURNEY!!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, .50); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
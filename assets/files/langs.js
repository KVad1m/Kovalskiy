const select = document.querySelector('.change-lang');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeLanguage);

function changeLanguage() {
   let lang = select.value;
   if (!allLang.includes(lang)) {
      lang = 'en'; // Устанавливаем английский язык по умолчанию, если выбран неподдерживаемый язык
   }
   document.querySelector('title').innerHTML = langArr['intro__title'][lang];
   //document.querySelector('.lng-intro__title').innerHTML = langArr['intro__title'][lang];
   for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
         elem.innerHTML = langArr[key][lang];
      }
   }
}

changeLanguage();
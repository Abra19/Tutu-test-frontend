export default (e: any, el: any) => {
  e.preventDefault();
  const textEl = document.querySelector('.additionalText');
   if (textEl) {
     textEl.innerHTML = `<p>
       Выбран пользователь <b>${el.firstName} ${el.lastName}</b>
       <div class="textareaWrapper">
         Описание:
         <textarea cols="100" rows="5" readonly>${el.description}</textarea>
       </div>
       Адрес проживания: <b>${el.adress.streetAddress}</b>
       <br>
       Город: <b>${el.adress.city}</b>
       <br>
       Провинция/штат: <b>${el.adress.state}</b>
       <br>
       Индекс: <b>${el.adress.zip}</b>
     </p>`
   }
};

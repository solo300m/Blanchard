document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.btn-akkordion__list-item').forEach(function(tabBtn){
    tabBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      console.log(path);
      document.querySelectorAll('.akkord-box__left').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector("#"+path).classList.add('tab-content-active');
    });
  });
});
const parent = document.querySelectorAll('.catalog__akkordion-item');
console.log(parent)
parent.forEach(function(accBtn){accBtn.addEventListener("focus", () => accBtn.classList.add('focused'),true)});
parent.forEach(function(accBtn){accBtn.addEventListener("blur", () => accBtn.classList.remove('focused'),true)});

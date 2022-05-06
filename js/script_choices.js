class Select{
  constructor(selector, selector2, options){
    this.$el = document.querySelector(selector)
    this.$el2 = document.querySelector(selector2)
    this.selectedId = null
    this.#setup()
  }
  open(){
    this.$el2.classList.add('open');
    this.$el2.classList.remove('close')
  }
  #render(){

  }
  #setup(){
    this.$flag = 0
    /*this.$el2 = document.querySelector('#select_down')*/
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$el2.addEventListener('click', this.clickHandler)
    this.$value = this.$el.querySelector('[data-type="value"]')
  }
  clickHandler(event){
    const {type} = event.target.dataset
    if(((type === 'input'|| type === 'value')|| type === 'arrow') && this.$flag === 0){
      this.$flag = 1
      this.$arrow.classList.remove('fa-chevron-down')
      this.$arrow.classList.add('fa-chevron-up')
      this.open()
      console.log(type)
    }
    else if(((type === 'input'||type === 'value') || type === 'arrow') && this.$flag === 1){
      this.$flag = 0
      this.$arrow.classList.add('fa-chevron-down')
      this.$arrow.classList.remove('fa-chevron-up')
      this.close()
    }
    else if(type === 'item'){
      const id = event.target.dataset.id
      const text = document.querySelector('[data-id="'+id+'"]').textContent
      this.$value.textContent = text
      this.$flag = 0
      this.$arrow.classList.add('fa-chevron-down')
      this.$arrow.classList.remove('fa-chevron-up')
      this.close()
      /*console.log(type)*/
      console.log(text, this.$value.textContent)
    }
  }
  close(){
    this.$el2.classList.remove('open');
    this.$el2.classList.add('close')
  }
  destroy(){
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el2.removeEventListener('click', this.clickHandler)
  }
}


const select = new Select('#select_1', '#select_down', {
})
const select2 = new Select('#select_2','#select_down2',{

})
const select3 = new Select('#select_3','#select_down3',{

})
const select4 = new Select('#select_4','#select_down4',{

})
const select5 = new Select('#select_5','#select_down5',{

})
const select6 = new Select('#select_6','#select_down6',{

})
const select6_2 = new Select('#select_6_2','#select_down6_2',{

})
const select7 = new Select('#select_7','#select_down7',{

})
const select8 = new Select('#select_8','#select_down8',{

})



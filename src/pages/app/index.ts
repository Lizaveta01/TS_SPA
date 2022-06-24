class App{
  private container: HTMLElement; //любой элемент, который можно получить через document.querySelector(''), например document.body


  constructor(){
    this.container = document.body;
  }


  run() {
    this.container.innerText = 'Single Page Application' // добавление текста на document.body
  }
}

export default App;
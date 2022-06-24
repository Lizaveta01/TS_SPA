import Page from "../../core/templates/page";
class MainPage extends Page{
  static TextObject = {
    MainTitle: 'Main Page'
  };

  constructor (id: string){
    super(id);
  }

 

  render(){
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle) // с помощью static мы можем обратиться к TextObject через 
    this.container.append(title)
    return this.container
  } 
}

export default MainPage;
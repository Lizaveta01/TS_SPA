import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import Page from "../../core/templates/page";

class App{
  private container: HTMLElement; 
  private initialPage: MainPage;

  static renderNewPage(idPage:string) {
    document.body.innerHTML = '';
    let page: Page | null = null;

    if (idPage === 'main-page'){
      page = new MainPage(idPage)
    } else if ( idPage === 'settings-page'){
      page = new SettingsPage(idPage)
    } else if (idPage === 'statistics-page'){
      page = new StatisticsPage(idPage)
    }   

    if (page) {
      const pageHTML = page.render();
      document.body.append(pageHTML);
    }
    
  }

  constructor(){
    this.container = document.body;
    this.initialPage = new MainPage('main-page');
  }
  

  run() {
    App.renderNewPage('statistics-page')
  }
}

export default App;
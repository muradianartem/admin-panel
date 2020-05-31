import { createBrowserHistory } from 'history';


export default createBrowserHistory({
  getUserConfirmation: (message, callback): void => {
    console.log('dobro');
  }
});
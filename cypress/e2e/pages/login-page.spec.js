import LoginPage from '../components/loginPage';
const loginPage = new LoginPage
describe('Login test case', () => {
    it('Login', () => {
    
    loginPage.navigate()
    loginPage.fillFormAndSubmit('visual_user', 'secret_sauce');

        });
});
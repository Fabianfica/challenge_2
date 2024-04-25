import LoginPage from '../components/loginPage';
const loginPage = new LoginPage
describe('Login y mock de endpoint con POM', () => {
    it('debe permitir el login y mockear la lista de contactos', () => {
    
    
   

        loginPage.navigate()
        loginPage.fillFormAndSubmit('standard_user', 'secret_sauce');

        });
});
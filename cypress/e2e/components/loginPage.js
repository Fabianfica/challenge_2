class LoginPage {
    navigate() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    fillFormAndSubmit(email, password) {
      cy.get('#user-name').type(email);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      
    }
  }
  
  export default LoginPage;
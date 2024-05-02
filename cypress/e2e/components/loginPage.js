class LoginPage {
    navigate() {
      cy.visit('/');
    }
  
    fillFormAndSubmit(user, password) {
      cy.get('#user-name').type(user);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      
    }
  }
  
  export default LoginPage;
describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  // testando a funcionalidade de enviar e-mail de contato de ponta a ponta
  it('Deve preencher formulário de contato com sucesso', () => { 
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Gustavo Anderson')
    cy.get('[name="email"]').type('gustavoanderson.qa@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Teste Alô Alô')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
     // testando se vai dar mensagem de erro com campo vazio de nome
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('gustavoanderson.qa@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Teste Alô Alô')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Por favor, preencha o campo Nome.').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher e-mail', () => {
    // testando se vai dar mensagem de erro com campo vazio de e-mail
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Gustavo Anderson')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Teste Alô Alô')
    cy.get('#btn-submit').click()
     // Resultado esperado
    cy.contains('Por favor, preencha o campo E-mail.').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => { 
    // testando se vai dar mensagem de erro com campo vazio de Assunto
   //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Gustavo Anderson')
    cy.get('[name="email"]').type('gustavoanderson.qa@gmail.com')
    //cy.get('[name="subject"]').clear()
    cy.get('[name="message"]').type('Teste Alô Alô')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Por favor, selecione o Assunto').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
// testando se vai dar mensagem de erro com campo vazio de Assunto
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Gustavo Anderson')
    cy.get('[name="email"]').type('gustavoanderson.qa@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    //cy.get('[name="message"]').type('Hello world')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Por favor, escreva sua Mensagem.').should('exist')
  });
});
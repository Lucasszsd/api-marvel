describe('Teste E2E para a funcionalidade de busca de quadrinhos', () => {
    it('deve buscar quadrinhos', () => {
      cy.visit('http://localhost:3000'); 
      cy.request('GET', '/quadrinhos').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.above(0);
      });
    });
  });
  
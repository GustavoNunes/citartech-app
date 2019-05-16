describe('The home page', () => {
  before(() => {
    cy.visit('/');
  });

  it('contains a link to the list page', () => {
    cy.contains('View List')
      .should('have.attr', 'href')
      .and('include', 'country-codes');
  });

  it('contains a link that downloads a CSV file', () => {
    cy.contains('CSV').contains('Download').then(($btn) => {
      cy.request($btn.attr('href')).then((response) => {
        expect(response.headers['content-disposition']).to.eq('attachment; filename="country-codes.csv"');
        expect(response.headers['content-length']).to.be.above(0);
      });
    });
  });

  it('contains a link that downloads an Excel file', () => {
    cy.contains('Excel').contains('Download').then(($btn) => {
      cy.request($btn.attr('href')).then((response) => {
        expect(response.headers['content-disposition']).to.eq('attachment; filename="country-codes.xlsx"');
        expect(response.headers['content-length']).to.be.above(0);
      });
    });
  });
});

describe('The countries table', () => {
  before(() => {
    cy.visit('/country-codes');
  });

  it('loaded the data from the API', () => {
    cy.get('tr').should('have.length.at.least', 100);
  });

  it('is ordered', () => {
    cy.get('tbody tr').first().contains('Zimbabwe');
    cy.get('tbody tr').last().contains('Afghanistan');
  });

  it('contains the composite field', () => {
    cy.get('tbody tr').contains("Brazil")
      .siblings().contains("(BR) BRAZIL");
  });
});

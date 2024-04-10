describe('Login Web charles.estevez (HC)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('charles.estevez').wait(4000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible');
    //Set Unpaid
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=46').wait(3000);
    cy.get('span.heading4.flex1.margin-bottom-m').should('exist');
    cy.get('button[data-button=""].ThemeGrid_MarginGutter').click();
    cy.get('.feedback-message-text').should('contain', 'Update Successfully!').wait(4000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(4000);
  })
})

describe('Login Web nancy.martin (Staff)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('nancy.martin').wait(4000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible');
    //Membuat New Request
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0');
    cy.get('#NewRequest_Title').should('have.text', 'New Request');
    cy.get('#Input_InvoiceNumber').type('14. Taehyung')
    cy.get('#Input_PeriodStartDate').type('2024-12-31T02:19')
    cy.get('#Input_PeriodEndDate').type('2024-12-31T02:19')
    cy.get('#Input_Amount').type('3000')
    cy.get('button[data-button=""]').contains('Submit').click();
    cy.get('#b1-Title').should('have.text', 'Invoices').wait(4000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(4000)
  })
})

describe('Login Web cecil.anderson (Staff)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('cecil.anderson').wait(4000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible');
    //Membuat New Request
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0').wait(4000);
    cy.get('#NewRequest_Title').should('have.text', 'New Request');
    cy.get('#Input_InvoiceNumber').type('7. Orichimaru')
    cy.get('#Input_PeriodStartDate').type('2024-12-31T02:19')
    cy.get('#Input_PeriodEndDate').type('2024-12-31T02:19')
    cy.get('#Input_Amount').type('3000')
    cy.get('button[data-button=""]').contains('Submit').click();
    cy.get('#b1-Title').should('have.text', 'Invoices').wait(4000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(4000)
  })
})

describe('Login Web Superadmin.company (Admin)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('Superadmin.company').wait(4000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible');
    //Melihat Invoice
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=33').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=38').wait(4000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=32').wait(4000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(4000);
  })
})

describe('Login Web angela.garcia (Finance)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('angela.garcia').wait(3000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(3000);
    //Pay Bill
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(4000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=34').wait(4000)
    cy.contains('span', 'Unpaid').wait(3000);
    cy.contains('button', 'Pay bill').click();
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoicePayBill?EnergyInvoiceId=6').wait(4000);
    cy.get('#Input_HolderName').type('Yanto Bagus');
    cy.get('#Input_CardNumber').clear().type('123456789');
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=35').wait(4000)
    cy.get('span[data-expression=""].margin-right-m').wait(3000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(3000)
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(3000)
  })
})
describe('Login Web charles.estevez (HC)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('charles.estevez').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(5000);
    //Set Unpaid
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=167').wait(5000);
    cy.get('span.heading4.flex1.margin-bottom-m').should('exist');
    cy.get('button[data-button=""].ThemeGrid_MarginGutter').click();
    cy.get('.feedback-message-text').should('contain', 'Update Successfully!').wait(5000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(5000);
  })
})

describe('Login Web nancy.martin (Staff)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('nancy.martin').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(5000);	
    //Membuat New Request
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0');
    cy.get('#NewRequest_Title').should('have.text', 'New Request');
    cy.get('#Input_InvoiceNumber').type('14. Taehyung')
    cy.get('#Input_PeriodStartDate').type('2600-12-31T02:19')
    cy.get('#Input_PeriodEndDate').type('2600-12-31T02:19')
    cy.get('#Input_Amount').type('5000')
    cy.get('button[data-button=""]').contains('Submit').click();
    cy.get('#b1-Title').should('have.text', 'Invoices').wait(5000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(5000)
  })
})

describe('Login Web cecil.anderson (Staff)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('cecil.anderson').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(5000);
    //Membuat New Request
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0').wait(5000);
    cy.get('#NewRequest_Title').should('have.text', 'New Request');
    cy.get('#Input_InvoiceNumber').type('7. Orichimaru')
    cy.get('#Input_PeriodStartDate').type('2600-12-31T02:19')
    cy.get('#Input_PeriodEndDate').type('2600-12-31T02:19')
    cy.get('#Input_Amount').type('5000')
    cy.get('button[data-button=""]').contains('Submit').click();
    cy.get('#b1-Title').should('have.text', 'Invoices').wait(5000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(5000)
  })
})

describe('Login Web Superadmin.company (Admin)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('Superadmin.company').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(5000);
    //Melihat Invoice
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=48').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=166').wait(5000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=56').wait(5000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(5000);
  })
})

describe('Login Web angela.garcia (Finance)', () => {
  it('Succes Login', () => {
    //Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('angela.garcia').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible').wait(5000);
    //Pay Bill
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000);
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=46').wait(5000)
    cy.contains('span', 'Unpaid').wait(5000);
    cy.contains('button', 'Pay bill').click();
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoicePayBill?EnergyInvoiceId=46').wait(5000);
    cy.get('#Input_HolderName').type('Yanto Bagus');
    cy.get('#Input_CardNumber').clear().type('123456789');
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=34').wait(5000)
    cy.get('span[data-expression=""].margin-right-m').wait(5000)
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices').wait(5000)
    //Melihat Dashboard Amount
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard').wait(5000)
  })
})

describe('Failed Login Web', () => {
  it('Failed Login', () => {
    //Failed Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('charles.estevez').wait(5000)
    cy.get('#Input_PasswordVal').type('12345')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.feedback-message-text').should('contain', 'Invalid username or password.').wait(4000);
    //Succes Login Web
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/').wait(6000)
    cy.get('#Input_UsernameVal').type('charles.estevez').wait(5000)
    cy.get('#Input_PasswordVal').type('123456')
    cy.get('button[data-button=""][type="submit"]').click();
    cy.get('.content-top-title').should('be.visible');
  })
})
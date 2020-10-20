/// <reference types="cypress" />

describe("First Test", () => {
  it("visit and click", () => {
    cy.visit("/");

    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
  });

  it("Inline Form", () => {
    cy.get('[placeholder="Jane Doe"]').type("Irfan Rafif");
    cy.get('[type="text"][placeholder="Email"]').type("demoui@gmail.com");
    cy.contains("Remember me").click();
  });

  it("Using The Grid", () => {
    cy.get("#inputEmail1").type("demoui1@gmail.com");
    cy.get("#inputPassword2").type("demoui1");
    cy.contains("Option 1").click();
    cy.contains("Option 2").click();
  });

  it("Basic Form", () => {
    cy.get("#exampleInputEmail1").type("demoui2@gmail.com");
    cy.get("#exampleInputPassword1").type("demoui2");
    cy.contains("Check me out").click();
  });

  it("Form Without Labels", () => {
    cy.get('[placeholder="Recipients"]').type("Irfan Rafif");
    cy.get('[placeholder="Subject"]').type("Demo UI");
    cy.get('[placeholder="Message"]').type("Ini cuma sebuah test UI");
  });

  it("Block Form", () => {
    cy.get("#inputFirstName").type("Irfan");
    cy.get("#inputLastName").type("Rafif");
    cy.get("#inputEmail").type("demoui3@gmail.com");
    cy.get("#inputWebsite").type("https://github.com/mirfanrafif");
  });

  it("Horizontal Form", () => {
    cy.get("#inputEmail3")
      .type("demoui4@gmail.com")
      .should("have.value", "demoui4@gmail.com");
    cy.get("#inputPassword3").type("demoui4").should("have.value", "demoui4");
  });
});

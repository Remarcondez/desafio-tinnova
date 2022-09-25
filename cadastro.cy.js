

describe ('Acessar a área de cadastro do app Tinnova', ()=>{

    it ('Dado que acesso app Tinnova', ()=>{
        cy.viewport(1920,1080)
        cy.visit('https://tinnova-teste-qa.vercel.app/')
        cy.get('.sc-bczRLJ').should('have.text', 'Entrar')
    })

    it ('Quando clico em Entrar', ()=>{
        cy.get('.sc-bczRLJ').click()
    })

    it ('Então sou direcionado para área de cadastro', ()=>{
        cy.get('.sc-hKMtZM > :nth-child(3)').should('have.text', 'Adicionar')
    })
})

describe ('Cadastrar usuário', ()=>{

    it ('Dado que estou na área de cadastro', ()=>{
        cy.viewport(1920,1080)
        cy.visit('https://tinnova-teste-qa.vercel.app/')
        cy.get('.sc-bczRLJ').should('have.text', 'Entrar')
        cy.get('.sc-bczRLJ').click()
        cy.get('.sc-hKMtZM > :nth-child(3)').should('have.text', 'Adicionar')
        cy.get('.sc-hKMtZM > :nth-child(3)').click()
    })

    it ('Quando preencho todas as informções do usuário e clico em guardar', ()=>{
        var usuario = {
            nome: 'Regiane',
            email: 'regiane@teste.com',
            cpf: '297.767.561-23',
            telefone: '1199999999'
        }

        cy.get('input[name="name"]').type(usuario.nome)
        cy.get('input[name="email"]').type(usuario.email)
        cy.get('input[name="cpf"]').type(usuario.cpf)
        cy.get('input[name="phone"]').type(usuario.telefone)
        cy.get('.sc-bczRLJ').click()
        

    })


})
describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

         cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести правильный логин +
         cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и вести правльный пароль
         cy.get('#loginButton').click(); //Найти внопку "войти" и нажать на нее
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить, что авторизация прошла успешно
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
     })


     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

        cy.get('#forgotEmailButton').click(); //наживаю кнопку "забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажал на кнопку "отправить код"
       
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверить, что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
    })


     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

        cy.get('#mail').type('german@dolnikov.ru'); //Найти поле логин и ввести правильный логин +
        cy.get('#pass').type('iLoveqastudio7'); //Найти поле пароль и вести неправльный пароль
        cy.get('#loginButton').click(); //Найти внопку "войти" и нажать на нее
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что авторизация не удалась
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

        cy.get('#mail').type('germa@dolnikov.ru'); //Найти поле логин и ввести неправильный логин 
        cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и вести правльный пароль
        cy.get('#loginButton').click(); //Найти внопку "войти" и нажать на нее
    
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
    })
    
    it('Ввести логин без @  и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

        cy.get('#mail').type('germandolnikov.ru'); //Найти поле логин и ввести неправильный логин +
        cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и вести правльный пароль
        cy.get('#loginButton').click(); //Найти внопку "войти" и нажать на нее
    
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверить, что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
    })

    it('проверка на приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки "восстановить пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Найти поле логин и ввести логин строчными и заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //Найти поле пароль и вести правльный пароль
        cy.get('#loginButton').click(); //Найти внопку "войти" и нажать на нее
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить, что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик есть и  виден пользователю
    })

 }) 

 
 
 
 
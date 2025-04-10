describe('Покупка аватара на покемонах', function () {

    it('', function () {
         cy.visit('https://pokemonbattle.ru/'); //зашли на сайт
         cy.get('#k_email').type('USER_LOGIN'); // Найти поле для ввода почты, ввести почту
         cy.get('#k_password').type('USER_PASSWORD');// Найти поле для ввода пароля, ввести пароль
         cy.get('.MuiButton-root').click(); // нажать на кновку "Войти"
         cy.get('.header_card_trainer').click(); // найти кнопу "мой профиль" и нажать на нее
         cy.get('.k_mobile > :nth-child(5)').click(); // найти кнопу "смена аватара" и нажать на нее
         cy.get(':nth-child(8) > .shop__button').click() // нахожу кнопку купить у 8 аватара и наживаю на нее
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5555 5555 5555 5599'); // найти поле для ввода номера карты и ввести туда номер карты 
         cy.get(':nth-child(1) > .style_1_base_input').type('1234');// найти поле для ввода срока карты и ввести туда срок
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');// найти поле для ввода CVV карты и ввести туда CVV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('veres=y pares=a');// найти поле для ввода имени владельца карты и ввести туда имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // найти и нажать кнопку "оплатить"
         cy.get('.style_1_base_input').type('56456'); // найти поле для ввода пароля и ввести туда пароль из СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // найти и нажать кнопку "оплатить"
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');//проверить, что покупка прошла успешно
     })
    }) 
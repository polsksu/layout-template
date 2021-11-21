;(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    window.addEventListener('DOMContentLoaded', () => {

        const hamburger$ = document
            .querySelector('#hamburger')

        const hamburgerBackground$ = document
            .querySelector('.hamburger__overlay-to-close')

        const feedbackOpenButton$ = document
            .querySelector('.h-nav__feedback')

        const feedbackCloseButton$ = document
            .querySelector('.feedback-form__close-button')

        const feedbackForm$ = document
            .querySelector('.feedback-form')

        const feedbackFormInner$ = document
            .querySelector('.feedback-form__inner')

        const emailOpenButton$ = document
            .querySelector('.email-screen__input-button')

        const emailForm$ = document
            .querySelector('.email-form')

        const emailCloseButton$ = document
            .querySelector('.email-form__close-button')

        const formsBackground$ = document
            .querySelector('.forms__background')

        const emailFormInner$ = document
            .querySelector('.email-form__inner')


        hamburger$
            .addEventListener('input', () => {
                if (hamburger$.checked == true) {
                    hamburgerBackground$.style.display = "block";
                    sleep(1).then(() => {
                        hamburgerBackground$.classList.add('blackout');
                    })
                } else {
                    hamburgerBackground$.classList.remove('blackout');
                    hamburgerBackground$.classList.add('non-clickable');
                    sleep(505)
                        .then(() => {
                            hamburgerBackground$.style.display = null;
                            hamburgerBackground$.classList.remove('non-clickable');
                        })
                }
            });

        feedbackOpenButton$
            .addEventListener('click', () => {
                hamburger$.click();
                feedbackFormInner$.style.animation = null;
                feedbackForm$.style.display = 'block';
                formsBackground$.style.display = 'block';
                sleep(1).then(() => {
                    formsBackground$.classList.add('blackout');
                })
            })

        feedbackCloseButton$
            .addEventListener('click', () => {
                feedbackFormInner$.offsetHeight;
                feedbackFormInner$.style.animation = 'none';
                feedbackFormInner$.style.animation = 'disappearance .7s 1';
                formsBackground$.classList.remove('blackout');
                sleep(500).then(() => {
                    formsBackground$.style.display = null;
                })
                sleep(700).then(() => {
                    feedbackForm$.style.display = null;
                })
            })

        emailOpenButton$
            .addEventListener('click', () => {
                if (window.outerWidth <= 320) {
                    emailFormInner$.style.animation = null;
                    emailForm$.style.display = 'block';
                    formsBackground$.style.display = 'block';
                    sleep(50).then(() => {
                        formsBackground$.classList.add('blackout');
                    })
                }
            })

        emailCloseButton$
            .addEventListener('click',() => {
                emailFormInner$.offsetHeight;
                emailFormInner$.style.animation = 'none';
                emailFormInner$.style.animation = 'disappearance .7s 1';
                formsBackground$.classList.remove('blackout');
                sleep(500).then(() => {
                    formsBackground$.style.display = null;
                })
                sleep(700).then(() => {
                    emailForm$.style.display = null;
                })
            })
    })

})();
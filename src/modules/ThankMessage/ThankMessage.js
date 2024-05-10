import Button from "../../elements/Button/Button";
import styles from './styles.module.scss';

class ThankMessage {
  email
  constructor ({email}) {
    this.messageButton = new Button ({
      type: 'button',
      text: 'Dismiss message'
    }).button

    this.email = email;

    this.buildThankMessageWrapper();
    this.deleteThankMessage();
  }

  get thankMessage () {
    return this.$thankMessageWrapper;
  }

  buildThankMessageWrapper = () => {
    const $thankMessageWrapper = document.createElement('div');
    $thankMessageWrapper.className = [styles.thank_message_wrapper, 'd-flex', 'just-content-center', 'align-items-center', 'hg-100vh'].join(' ');

    const $thankMessage = document.createElement('div');
    $thankMessage.className = [styles['thank-message'], 'd-flex', 'just-content-center', 'align-items-center', 'flex-direction-column'].join(' ');

    const $thankImg = document.createElement('img');
    $thankImg.className = [styles['thank-message__img'], 'mb-23'].join(' ');

    $thankImg.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='100%25' x2='0%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6A3A'/%3E%3Cstop offset='100%25' stop-color='%23FF527B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none'%3E%3Ccircle cx='32' cy='32' r='32' fill='url(%23a)'/%3E%3Cpath stroke='%23FFF' stroke-width='4' d='m18.286 34.686 8.334 7.98 19.094-18.285'/%3E%3C/g%3E%3C/svg%3E");

    const $thankTitle = document.createElement('h1');
    $thankTitle.className = ['fs-r-4', 'fw-70', 'mb-13'].join(' ');

    $thankTitle.innerText = 'Thanks for subscribing!';

    const $thankText = document.createElement('p');
    $thankText.className = styles['thank-message__text'];

    const $firstTextPart = document.createElement('span');

    $firstTextPart.innerText = 'A confirmation email has been sent to ';

    const $secondTextPart = document.createElement('span');
    $secondTextPart.className = 'fw-70';

    $secondTextPart.innerText = `${this.email}.`;

    const $thirdTextPart = document.createElement('span');

    $thirdTextPart.innerText = ' Please open it and click the button inside to confirm your subscription.';

    $thankText.appendChild($firstTextPart);
    $thankText.appendChild($secondTextPart);
    $thankText.appendChild($thirdTextPart);

    $thankMessage.appendChild($thankImg);
    $thankMessage.appendChild($thankTitle);
    $thankMessage.appendChild($thankText);
    $thankMessage.appendChild(this.messageButton);

    $thankMessageWrapper.appendChild($thankMessage);
    
    this.$thankMessageWrapper = $thankMessageWrapper
  }

  deleteThankMessage = () => {
    this.messageButton.addEventListener('click', (e) => {
      this.$thankMessageWrapper.remove();
    })
  }
}

export default ThankMessage;
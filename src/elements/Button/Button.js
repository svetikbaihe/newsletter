import styles from './styles.module.scss'

class Button {
  type
  text
  $button

  constructor ({type, text}) {
    this.type = type;
    this.text =text;

    this.buildButton();
  }

  get button() {
    return this.$button;
  }

  buildButton = () => {
    const $button = document.createElement('button');
    $button.className = styles['button'];

    $button.setAttribute('type', this.type);

    $button.innerText = this.text;

    this.$button = $button;
  }
}

export default Button;
import styles from './styles.module.scss';

class Input {
  type
  name
  label
  placeholder

  constructor ({type, name, label, placeholder}) {
    this.type = type;
    this.name = name;
    this.label = label;
    this.placeholder = placeholder;

    this.buildInputWrapper();
  }

  get inputWrapper() {
    return this.$inputWrapper;
  }

  buildInputWrapper = () => {
    const $inputWrapper = document.createElement('div');
    $inputWrapper.className = [styles.input_wrapper, 'd-flex', 'flex-direction-column', 'mb-12'].join(' ');

    const $input = document.createElement('input');
    $input.className = [styles.input, 'pl-11'].join(' ');

    $input.setAttribute('id', `id-${this.name}`);
    $input.setAttribute('placeholder', this.placeholder);

    const $label = document.createElement('label');
    $label.className = [styles.label, 'fw-70', 'mb-7'].join(' ');

    $label.setAttribute('for', `id-${this.name}`);

    $label.innerText = this.label;

    $inputWrapper.appendChild($label);
    $inputWrapper.appendChild($input);

    this.$input = $input;
    this.$inputWrapper = $inputWrapper;
  }
}

export default Input;
import Button from "../../elements/Button/Button"
import Input from "../../elements/Input/Input"
import ThankMessage from "../ThankMessage/ThankMessage"
import $app from "../../constants/app"
import styles from "./styles.module.scss"

class SubscribeForm {
  $errorMessage
  constructor({ method }) {
    this.method = method

    this.button = new Button({
      type: "submit",
      text: "Subscribe to monthly newsletter",
    }).button

    this.input = new Input({
      type: "email",
      name: "email",
      label: "Email address",
      placeholder: "email@company.com",
    }).inputWrapper

    this.buildErrorMessage()
    this.buildForm()
  }

  get form() {
    return this.$form
  }

  get errorMessage() {
    return this.$errorMessage
  }

  buildErrorMessage = () => {
    const $errorMessage = document.createElement("span")

    $errorMessage.className = styles["error_message"]

    const $input = this.input.childNodes[0]

    $input.appendChild($errorMessage)

    this.$errorMessage = $errorMessage
  }

  buildForm = () => {
    const $form = document.createElement("form")

    $form.className = styles["form"]

    $form.appendChild(this.input)
    $form.appendChild(this.button)

    $form.addEventListener("submit", e => this.handleSubmit(e))

    this.$form = $form
  }

  handleSubmit = e => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const inputValue = this.input.childNodes[1].value

    const $input = this.input.childNodes[1]

    if (inputValue === "") {
      this.$errorMessage.innerText = ""
      this.$errorMessage.innerText = "Please fill in the field"
      $input.classList.add(styles["input_error"])

      return
    }
    if (
      inputValue !== "" &&
      !emailRegex.test(inputValue) &&
      (this.$errorMessage.innerText !== "" ||
        this.$errorMessage.innerText === "")
    ) {
      this.$errorMessage.innerText = ""
      this.$errorMessage.innerText = "Valid email required"
      $input.classList.add(styles["input_error"])

      return
    }
    if (
      inputValue !== "" &&
      emailRegex.test(inputValue) &&
      (this.$errorMessage.innerText !== "" ||
        this.$errorMessage.innerText === "")
    ) {
      this.$errorMessage.innerText = ""
      this.$form.parentElement.parentElement.parentElement.parentElement.remove()

      const thank = new ThankMessage({
        email: inputValue,
      }).thankMessage

      $app.appendChild(thank)

      return
    }
  }
}

export default SubscribeForm

import Button from "../../elements/Button/Button"
import $app from "../../constants/app"
import Newsletter from "../Newsletter/Newsletter"
import styles from "./styles.module.scss"

class ThankMessage {
  email
  constructor({ email }) {
    this.messageButton = new Button({
      type: "button",
      text: "Dismiss message",
    }).button

    this.newsletter = new Newsletter().newsletterWrapper

    this.email = email

    this.buildThankMessageWrapper()
    this.deleteThankMessage()
  }

  get thankMessage() {
    return this.$thankMessageWrapper
  }

  buildThankMessageWrapper = () => {
    const $thankMessageWrapper = document.createElement("div")

    $thankMessageWrapper.className = styles["thank_message_wrapper"]

    const $thankMessage = document.createElement("div")

    $thankMessage.className = styles["thank_message"]

    const $thankImg = document.createElement("img")

    $thankImg.className = styles["thank_message_img"]

    $thankImg.setAttribute("src", "/svg/icon-success.svg")

    const $thankTitle = document.createElement("h1")

    $thankTitle.className = styles["thank_message_title"]

    $thankTitle.innerText = "Thanks for subscribing!"

    const $thankText = document.createElement("p")

    $thankText.className = styles["thank_message_text"]

    const $firstTextPart = document.createElement("span")

    $firstTextPart.innerText = "A confirmation email has been sent to "

    const $secondTextPart = document.createElement("span")

    $secondTextPart.className = styles["thank_message_email"]

    $secondTextPart.innerText = `${this.email}.`

    const $thirdTextPart = document.createElement("span")

    $thirdTextPart.innerText =
      " Please open it and click the button inside to confirm your subscription."

    $thankText.appendChild($firstTextPart)
    $thankText.appendChild($secondTextPart)
    $thankText.appendChild($thirdTextPart)

    $thankMessage.appendChild($thankImg)
    $thankMessage.appendChild($thankTitle)
    $thankMessage.appendChild($thankText)
    $thankMessage.appendChild(this.messageButton)

    $thankMessageWrapper.appendChild($thankMessage)

    this.$thankMessageWrapper = $thankMessageWrapper
  }

  deleteThankMessage = () => {
    this.messageButton.addEventListener("click", e => {
      this.$thankMessageWrapper.remove()

      $app.appendChild(this.newsletter)
    })
  }
}

export default ThankMessage

import $app from "./src/constants/app.js"
import Newsletter from "./src/modules/Newsletter/Newsletter.js"
import ThankMessage from "./src/modules/ThankMessage/ThankMessage.js"
import "./main.scss"

const newLetter = new Newsletter()

$app.appendChild(newLetter.newsletterWrapper)

// const thank = new ThankMessage('jhkjh')

// $app.appendChild(thank.thankMessage)
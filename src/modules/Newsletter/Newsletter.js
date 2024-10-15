import SubscribeForm from "../SubscribeForm/SubscribeForm"
import styles from "./styles.module.scss"

class Newsletter {
  constructor() {
    this.form = new SubscribeForm({
      method: "post",
    }).form
    this.buildNewsletterWrapper()
  }

  get newsletterWrapper() {
    return this.$newsletterWrapper
  }

  buildNewsletterWrapper = () => {
    const $newsletterWrapper = document.createElement("div")

    $newsletterWrapper.className = styles["newsletter_wrapper"]

    $newsletterWrapper.appendChild(this.buildNewsletter())

    this.$newsletterWrapper = $newsletterWrapper
  }

  buildNewsletter = () => {
    const $newsletter = document.createElement("div")

    $newsletter.className = styles["newsletter"]

    $newsletter.appendChild(this.buildNewsletterInnerWrapper())

    return $newsletter
  }

  buildNewsletterInnerWrapper = () => {
    const $newsInnerWrapper = document.createElement("div")

    $newsInnerWrapper.className = styles["news_inner_wrapper"]

    $newsInnerWrapper.appendChild(this.buildTextContainer())
    $newsInnerWrapper.appendChild(this.buildImgWrapper())

    return $newsInnerWrapper
  }

  buildTextContainer = () => {
    const $textContainer = document.createElement("div")

    $textContainer.className = styles["text_container"]

    $textContainer.appendChild(this.buildInfoWrapper())
    $textContainer.appendChild(this.form)

    return $textContainer
  }

  buildInfoWrapper = () => {
    const $infoArea = document.createElement("div")
    $infoArea.className = styles["info_area"]

    const $title = document.createElement("h1")
    $title.className = styles["info_area_title"]

    $title.innerText = "Stay updated!"

    const $info = document.createElement("p")
    $info.className = styles["info_area_text"]

    $info.innerText =
      "Join 60,000+ product managers receiving monthly updates on:"

    const $textList = document.createElement("ul")
    $textList.className = styles["text_list"]

    const $textListItem1 = document.createElement("li")

    $textListItem1.innerText = "Product discovery and building what matters"

    const $textListItem2 = document.createElement("li")

    $textListItem2.innerText = "Measuring to ensure updates are a success"

    const $textListItem3 = document.createElement("li")

    $textListItem3.innerText = "And much more!"

    $textList.appendChild($textListItem1)
    $textList.appendChild($textListItem2)
    $textList.appendChild($textListItem3)

    $infoArea.appendChild($title)
    $infoArea.appendChild($info)
    $infoArea.appendChild($textList)

    return $infoArea
  }

  buildImgWrapper = () => {
    const $imgWrapper = document.createElement("div")

    $imgWrapper.className = styles["background_img"]

    return $imgWrapper
  }
}

export default Newsletter

import styles from './styles.module.scss';
import SubscribeForm from "../SubscribeForm/SubscribeForm";

class Newsletter {

  constructor () {
    this.form = new SubscribeForm ({
      method: 'post'
    }).form;
    this.buildNewsletterWrapper();
  }

  get newsletterWrapper () {
    return this.$newsletterWrapper;
  }

  buildNewsletterWrapper = () => {
    const $newsletterWrapper = document.createElement('div');
    $newsletterWrapper.className = styles['newsletter_wrapper'];

    $newsletterWrapper.appendChild(this.buildNewsletter());

    this.$newsletterWrapper = $newsletterWrapper;
  }

  buildNewsletter = () => {
    const $newsletter = document.createElement('div');
    $newsletter.className = styles['newsletter'];

    $newsletter.appendChild(this.buildNewsletterInnerWrapper());

    return $newsletter;
  }

  buildNewsletterInnerWrapper = () => {
    const $newsInnerWrapper = document.createElement('div');
    $newsInnerWrapper.className = styles['news_inner_wrapper'];
    
    $newsInnerWrapper.appendChild(this.buildTextContainer());
    $newsInnerWrapper.appendChild(this.buildImgWrapper());

    return $newsInnerWrapper;
  }

  buildTextContainer = () => {
    const $textContainer = document.createElement('div');
    $textContainer.className = styles['text_container'];
    
    $textContainer.appendChild(this.buildInfoWrapper());
    $textContainer.appendChild(this.form);

    return $textContainer;
  }  

  buildInfoWrapper = () => {
    const $infoArea = document.createElement('div');
    $infoArea.className = styles['info_area'];

    const $title = document.createElement('h1');
    $title.className = styles['info_area__title'];

    $title.innerText = 'Stay updated!';

    const $info = document.createElement('p');
    $info.className = styles['info_area__text'];

    $info.innerText = 'Join 60,000+ product managers receiving monthly updates on:';

    const $textList = document.createElement('ul');
    $textList.className = styles['text_list'];

    const $textListItem1 = document.createElement('li');
    $textListItem1.innerText = 'Product discovery and building what matters';

    const $textListItem2 = document.createElement('li');
    $textListItem2.innerText = 'Measuring to ensure updates are a success';

    const $textListItem3 = document.createElement('li');
    $textListItem3.innerText = 'And much more!';

    $textList.appendChild($textListItem1);
    $textList.appendChild($textListItem2);
    $textList.appendChild($textListItem3);

    $infoArea.appendChild($title);
    $infoArea.appendChild($info);
    $infoArea.appendChild($textList);

    return $infoArea;
  }

  buildImgWrapper = () => {
    const $imgWrapper = document.createElement('div');
    $imgWrapper.className = styles['img_wrapper'];

    const $img_newsletter = document.createElement('img');
    $img_newsletter.className = styles['img_newsletter'];

    $img_newsletter.setAttribute("src", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='400' height='593' viewBox='0 0 400 593'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='72.75%25' x2='27.25%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6A3A'/%3E%3Cstop offset='100%25' stop-color='%23FF527B'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' x1='22.319%25' x2='99.127%25' y1='28.497%25' y2='70.858%25'%3E%3Cstop offset='0%25' stop-color='%23FF3E83'/%3E%3Cstop offset='100%25' stop-color='%23FF9F2E'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFB443'/%3E%3Cstop offset='100%25' stop-color='%23FF5B64' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='o' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F8F8F8'/%3E%3Cstop offset='100%25' stop-color='%23EEE'/%3E%3C/linearGradient%3E%3ClinearGradient id='p' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23CACBE8'/%3E%3Cstop offset='100%25' stop-color='%23EEE'/%3E%3Cstop offset='100%25' stop-color='%23CACBE8'/%3E%3C/linearGradient%3E%3ClinearGradient id='r' x1='97.791%25' x2='7.729%25' y1='26.944%25' y2='71.879%25'%3E%3Cstop offset='0%25' stop-color='%23FF9049'/%3E%3Cstop offset='100%25' stop-color='%23FF5E5E'/%3E%3C/linearGradient%3E%3ClinearGradient id='t' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6A3D'/%3E%3Cstop offset='100%25' stop-color='%23FF5B66'/%3E%3C/linearGradient%3E%3Cpath id='e' d='M0 26C0 11.64 11.64 0 26 0h381c14.36 0 26 11.64 26 26v237c0 14.36-11.64 26-26 26H26c-14.36 0-26-11.64-26-26V26Z'/%3E%3Cpath id='g' d='M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z'/%3E%3Cpath id='i' d='M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z'/%3E%3Cpath id='n' d='M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v229c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z'/%3E%3Cpath id='q' d='M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z'/%3E%3Cfilter id='d' width='127.7%25' height='141.5%25' x='-13.9%25' y='-12.5%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='24' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='16'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0'/%3E%3C/filter%3E%3Cfilter id='f' width='129.9%25' height='146.3%25' x='-15%25' y='-13.9%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='24' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='16'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0'/%3E%3C/filter%3E%3Cfilter id='j' width='129.9%25' height='146.3%25' x='-15%25' y='-13.9%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='24' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='16'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0'/%3E%3C/filter%3E%3Cfilter id='m' width='127.7%25' height='147.8%25' x='-13.9%25' y='-14.3%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='24' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='16'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0'/%3E%3C/filter%3E%3Crect id='a' width='400' height='593' x='0' y='0' rx='16'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='c' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Crect width='400' height='593' rx='16'/%3E%3Cpath fill='url(%23b)' fill-rule='nonzero' d='M0 0h400v593H0z' mask='url(%23c)'/%3E%3Cg mask='url(%23c)'%3E%3Cg fill-rule='nonzero' transform='translate(-192 211)'%3E%3Cuse xlink:href='%23e' fill='%23000' filter='url(%23d)'/%3E%3Cuse xlink:href='%23e' fill='%23242742'/%3E%3C/g%3E%3Cg transform='translate(-176 226)'%3E%3Cg fill-rule='nonzero'%3E%3Cuse xlink:href='%23g' fill='%23000' filter='url(%23f)'/%3E%3Cuse xlink:href='%23g' fill='url(%23h)'/%3E%3C/g%3E%3Cmask id='l' fill='%23fff'%3E%3Cuse xlink:href='%23i'/%3E%3C/mask%3E%3Cg fill-rule='nonzero'%3E%3Cuse xlink:href='%23i' fill='%23000' filter='url(%23j)'/%3E%3Cuse xlink:href='%23i' fill='url(%23h)'/%3E%3C/g%3E%3Ccircle cx='390' cy='244' r='158' fill='url(%23k)' fill-rule='nonzero' mask='url(%23l)'/%3E%3Ccircle cx='136.446' cy='-34.554' r='158' fill='url(%23k)' fill-rule='nonzero' mask='url(%23l)' transform='rotate(-135 136.446 -34.554)'/%3E%3C/g%3E%3Cg fill-rule='nonzero' transform='translate(129 115)'%3E%3Cuse xlink:href='%23n' fill='%23000' filter='url(%23m)'/%3E%3Cuse xlink:href='%23n' fill='url(%23o)'/%3E%3Cpath fill='url(%23p)' d='M0 11C0 4.925 4.925 0 11 0h85v251H11c-6.075 0-11-4.925-11-11V11Z'/%3E%3Cpath fill='%23BABBDB' d='M14 50.5a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h54a3.5 3.5 0 0 1 0 7h-54a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h39a3.5 3.5 0 1 1 0 7h-39a3.5 3.5 0 0 1-3.5-3.5Z'/%3E%3Cpath fill='%23242742' d='M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v20H0V11Z'/%3E%3Cg transform='translate(16 9)'%3E%3Ccircle cx='6.5' cy='6.5' r='6.5' fill='%23FF6464'/%3E%3Ccircle cx='28.5' cy='6.5' r='6.5' fill='%23FF9255'/%3E%3Ccircle cx='50.5' cy='6.5' r='6.5' fill='%236BD4A8'/%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(246 93)'%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z'/%3E%3Cmask id='s' fill='%23fff'%3E%3Cuse xlink:href='%23q'/%3E%3C/mask%3E%3Cuse xlink:href='%23q' fill='%23FFF' fill-rule='nonzero'/%3E%3Cpath fill='url(%23r)' fill-rule='nonzero' d='M108.12 28.878a3 3 0 0 1 .002 4.243L82.847 58.41c-4.348 4.351-11.4 4.351-15.749 0a5.132 5.132 0 0 0-7.26 0L42.406 75.853a8.668 8.668 0 0 1-12.262 0 2.668 2.668 0 0 0-3.774 0l-32.248 32.268a3 3 0 1 1-4.244-4.242l32.248-32.267a8.668 8.668 0 0 1 12.262 0 2.668 2.668 0 0 0 3.774 0L55.594 54.17c4.348-4.35 11.4-4.35 15.748 0a5.132 5.132 0 0 0 7.26 0l25.276-25.29a3 3 0 0 1 4.243-.002Z' mask='url(%23s)'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M49 150a4 4 0 0 1 4-4h120a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H53a4 4 0 0 1-4-4V150Z'/%3E%3Cpath fill='url(%23t)' d='M46.5 79C64.45 79 79 64.45 79 46.5S64.45 14 46.5 14 14 28.55 14 46.5 28.55 79 46.5 79Zm0 14C72.181 93 93 72.181 93 46.5S72.181 0 46.5 0 0 20.819 0 46.5 20.819 93 46.5 93Z' transform='translate(67 175)'/%3E%3Cpath fill='%23242742' fill-rule='nonzero' d='M96.61 216.72c0 2.27.589 4.067 1.766 5.39 1.177 1.313 2.78 1.969 4.812 1.969 1.886 0 3.36-.672 4.422-2.016 1.073-1.344 1.61-3.02 1.61-5.031h-1.172c0 1.146-.318 2.057-.954 2.734-.635.677-1.427 1.016-2.375 1.016-1.01 0-1.76-.339-2.25-1.016-.49-.687-.734-1.692-.734-3.015 0-1.51.245-2.594.734-3.25.5-.667 1.24-1 2.22-1 1.051 0 1.869.432 2.452 1.297.584.864.875 2.411.875 4.64l.14.625c0 3.302-.723 5.646-2.171 7.031-1.448 1.386-3.495 2.073-6.14 2.063h-.704v3.969h.813c4.25-.042 7.495-1.193 9.734-3.453 2.25-2.271 3.375-5.329 3.375-9.172v-.813c0-3.458-.776-5.958-2.328-7.5-1.552-1.552-3.557-2.328-6.016-2.328-2.468 0-4.437.714-5.906 2.14-1.469 1.428-2.203 3.334-2.203 5.72ZM123.923 232h4.828v-22.75h-4.516l-10.11 14.563v3.438h17.141v-3.891h-4.937l-.813.078h-6.5l4.828-7.562h.157v9.593l-.079.547v5.985Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

    $imgWrapper.appendChild($img_newsletter);

    return $imgWrapper;
  }
}

export default Newsletter;
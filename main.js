import './main.scss';
import $app from './src/assets/utils/app.js';
import Newsletter from './src/modules/Newsletter/Newsletter.js';

const newLetter = new Newsletter();

$app.appendChild(newLetter.newsletterWrapper);



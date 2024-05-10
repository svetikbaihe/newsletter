import $app from './src/assets/utils/app.js';
import Newsletter from './src/modules/Newsletter/Newsletter.js';
import './main.scss';

const newLetter = new Newsletter();

$app.appendChild(newLetter.newsletterWrapper);



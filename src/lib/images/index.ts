import type { CardType } from '../index.js';
import imgAmex from './americanexpress.svg';
import imgDiscover from './discover.svg';
import imgDinersclub from './disnersclub.svg';
import imgElo from './elo.svg';
import imgHiper from './hiper.svg';
import imgHipercard from './hipercard.svg';
import imgJcb from './jcb.svg';
import imgMaestro from './maestro.svg';
import imgMastercard from './mastercard.svg';
import imgMir from './mir.svg';
import imgUnionpay from './unionpay.svg';
import imgVisa from './visa.svg';

export { default as imgGenericCard } from './generic.svg';

// [url, weight]
export const cardImages: Record<CardType, string> = {
  'american-express': imgAmex,
  'diners-club': imgDinersclub,
  discover: imgDiscover,
  elo: imgElo,
  hiper: imgHiper,
  hipercard: imgHipercard,
  jcb: imgJcb,
  maestro: imgMaestro,
  mastercard: imgMastercard,
  mir: imgMir,
  unionpay: imgUnionpay,
  visa: imgVisa
};

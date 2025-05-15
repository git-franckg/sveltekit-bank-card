import cardValidator from "card-validator";
import { createPanMask } from "./string.js";
import { getExpirationDates } from "./expirationDate.js";

export type CardName =
  | "Visa"
  | "Mastercard"
  | "American Express"
  | "Diners Club"
  | "Discover"
  | "JCB"
  | "UnionPay"
  | "Maestro"
  | "Elo"
  | "Mir"
  | "Hiper"
  | "Hipercard";

export type CardType =
  | "visa"
  | "mastercard"
  | "american-express"
  | "diners-club"
  | "discover"
  | "jcb"
  | "unionpay"
  | "maestro"
  | "elo"
  | "mir"
  | "hiper"
  | "hipercard";

export interface BankCard {
  isValid: boolean;
  isMaybeValid: boolean;
  card?: {
    networkName: CardName;
    networkType: CardType;
    pan: {
      mask: string;
      lengths: number[];
    };
    code: {
      name: string;
      mask: string;
      example: string;
      length: number;
    };
    exp: {
      values: string[];
      mask: string;
      example: string;
    };
  };
}

export function number(num: string): BankCard {
  const {
    isValid,
    isPotentiallyValid: isMaybeValid,
    card,
  } = cardValidator.number(num);

  if (!card) return { isValid, isMaybeValid };

  return {
    isValid,
    isMaybeValid,
    card: {
      networkName: card.niceType as CardName,
      networkType: card.type as CardType,
      pan: {
        mask: createPanMask(card.lengths, card.gaps),
        lengths: card.lengths,
      },
      code: {
        name: card.code.name,
        mask: "0".repeat(card.code.size),
        example: [...Array(card.code.size).keys()].map((n) => n + 1).join(""),
        length: card.code.size,
      },
      exp: getExpirationDates(),
    },
  };
}

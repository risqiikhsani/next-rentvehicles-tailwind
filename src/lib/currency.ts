import { Locale } from "@/i18n.config";

export default function localeCurrency(price: number, lang: Locale) {
  if (lang === "id") {
    const exchangeRate = 13000;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price * exchangeRate);
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }
}

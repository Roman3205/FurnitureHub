export default function (price: number | undefined): string | undefined {
  let fixedPrice = price?.toFixed(2);
  const priceFloor = Math.round(price / 1000);
  if (priceFloor === 0) return price?.toFixed(2);

  const lengthT = String(priceFloor).length;
  const thousands = String(price?.toFixed(2)).slice(0, lengthT);
  return `${thousands},${String(fixedPrice).slice(lengthT)}`;
}

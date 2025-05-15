export function createPanMask(lengths: number[], gaps: number[]): string {
  const length = Math.max(...lengths);
  let mask = '0'.repeat(length);

  // On insère les espaces dans le sens inverse pour que les indices ne soient pas décalé.
  [...gaps]
    .reverse()
    .filter((n) => n < length)
    .forEach((gap) => {
      mask = mask.slice(0, gap) + ' ' + mask.slice(gap);
    });

  return mask;
}

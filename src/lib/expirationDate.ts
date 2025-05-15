export interface ExpirationDates {
  values: string[];
  example: string;
  mask: '00/00';
}

export function getExpirationDates({
  maxYears = 10,
  date = new Date()
}: {
  maxYears?: number;
  date?: Date;
} = {}): ExpirationDates {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;

  const values: string[] = [];

  function add(month: number, year: number) {
    const mm = month.toString().padStart(2, '0');
    const yy = year.toString().substring(2);
    values.push(`${mm}/${yy}`);
  }

  // Current year
  for (let month = currentMonth; month <= 12; month++) {
    add(month, currentYear);
  }

  // Years in between
  for (let year = currentYear + 1; year < currentYear + maxYears; year++) {
    for (let month = 1; month <= 12; month++) {
      add(month, year);
    }
  }

  // Max year
  const maxYear = currentYear + maxYears;
  for (let month = 1; month <= 12; month++) {
    add(month, maxYear);
  }

  return {
    values,
    example: values[0] ?? 'MM/YY',
    mask: '00/00'
  };
}

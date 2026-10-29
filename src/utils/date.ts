const monthNames = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
] as const;

export function getCurrentDateParts(date: Date = new Date()) {
  return {
    day: date.getDate(),
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
}

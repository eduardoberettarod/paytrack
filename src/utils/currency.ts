/** Formata um número como moeda brasileira: 222.82 -> "R$ 222,82" */
export function formatCurrency(value: number): string {
  const safe = Number.isFinite(value) ? value : 0;
  const [int, dec] = Math.abs(safe).toFixed(2).split('.');
  const withDots = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${safe < 0 ? '-' : ''}R$ ${withDots},${dec}`;
}

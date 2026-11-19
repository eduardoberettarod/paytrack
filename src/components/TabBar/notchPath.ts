type NotchOptions = {
  notchRadius: number   // raio da concavidade (círculo que abraça o botão)
  notchCenterY: number  // altura do centro da concavidade, medida a partir do topo da barra
  fillet: number        // raio do arredondamento na borda da concavidade
}

// Gera o contorno (path SVG) de uma barra em formato de pílula com uma concavidade circular no topo, centralizada.
// Tudo é desenhado com arcos tangentes, então a curva não tem quinas.
export function buildBarPath(w: number, h: number, { notchRadius: R, notchCenterY: cy, fillet: f }: NotchOptions) {
  const cx = w / 2
  const r = h / 2

  // centro do arredondamento: tangente à linha do topo (y = 0) e ao círculo da concavidade
  const dx = Math.sqrt((R + f) ** 2 - (f - cy) ** 2)

  // ponto onde o arredondamento encontra o círculo da concavidade
  const tx = (R * dx) / (R + f)
  const ty = cy + (R * (f - cy)) / (R + f)

  return [
    `M ${r} 0`,
    `L ${cx - dx} 0`,
    `A ${f} ${f} 0 0 1 ${cx - tx} ${ty}`,       // arredondamento esquerdo
    `A ${R} ${R} 0 1 0 ${cx + tx} ${ty}`,       // concavidade (passa por baixo)
    `A ${f} ${f} 0 0 1 ${cx + dx} 0`,           // arredondamento direito
    `L ${w - r} 0`,
    `A ${r} ${r} 0 0 1 ${w} ${r}`,
    `L ${w} ${h - r}`,
    `A ${r} ${r} 0 0 1 ${w - r} ${h}`,
    `L ${r} ${h}`,
    `A ${r} ${r} 0 0 1 0 ${h - r}`,
    `L 0 ${r}`,
    `A ${r} ${r} 0 0 1 ${r} 0`,
    'Z',
  ].join(' ')
}

// Largura horizontal ocupada pela concavidade no topo da barra (incluindo os arredondamentos).
export function notchWidth({ notchRadius: R, notchCenterY: cy, fillet: f }: NotchOptions) {
  return 2 * Math.sqrt((R + f) ** 2 - (f - cy) ** 2)
}

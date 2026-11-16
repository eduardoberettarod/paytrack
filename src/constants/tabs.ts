// Telas que fazem parte da TabBar, na ordem em que aparecem.
export const tabs = [
  { name: 'home', route: '/screens/Dashboard' },
  { name: 'history', route: '/screens/History' },
  { name: 'category', route: '/screens/Category' },
] as const

// Retorna a posição da aba da rota atual, ou -1 se a rota não for uma aba.
// A rota '/' renderiza o Dashboard, então conta como a primeira aba.
export function getTabIndex(pathname: string) {
  const route = pathname === '/' ? tabs[0].route : pathname
  return tabs.findIndex((tab) => tab.route === route)
}
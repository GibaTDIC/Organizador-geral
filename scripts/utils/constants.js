// Prof GB — Registro central de módulos.
// Usado pela pf-sidebar hoje e, futuramente, por uma Home GIBABIT que
// precise listar os módulos disponíveis sem duplicar essa informação.
// Caminhos são relativos a partir de dentro de modules/<algum-modulo>/.
export const MODULES = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '../dashboard/index.html', status: 'active' },
  { id: 'programacao-diaria', label: 'Programação Diária', icon: '📅', path: '../programacao-diaria/index.html', status: 'active' },
  { id: 'planejamento', label: 'Planejamento', icon: '📚', path: '../planejamento/index.html', status: 'active' },
  { id: 'controlador', label: 'Controlador', icon: '✅', path: '../controlador/index.html', status: 'active' },
  { id: 'banco-atividades', label: 'Banco de Atividades', icon: '🗂️', path: '../banco-atividades/index.html', status: 'active' },
  { id: 'ia', label: 'Inteligência Artificial', icon: '🤖', path: '../inteligencia-artificial/index.html', status: 'active' },
  { id: 'relatorios', label: 'Relatórios', icon: '📊', path: '../relatorios/index.html', status: 'active' },
  { id: 'configuracoes', label: 'Configurações', icon: '⚙️', path: '../configuracoes/index.html', status: 'active' },
];

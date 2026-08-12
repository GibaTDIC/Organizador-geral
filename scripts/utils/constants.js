// Prof GB — Registro central de módulos.
// Usado pela pf-sidebar hoje e, futuramente, por uma Home GIBABIT que
// precise listar os módulos disponíveis sem duplicar essa informação.
// Caminhos são relativos a partir de dentro de modules/<algum-modulo>/.
// `grupo` organiza a sidebar em 3 seções — "complexidade nos bastidores,
// simplicidade pro professor": os 3 módulos de uso diário ficam em
// destaque, o resto (ferramentas de apoio + configuração pontual) fica
// visualmente subordinado, sem sumir.
export const MODULES = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '../dashboard/index.html', status: 'active', grupo: 'uso-diario' },
  { id: 'programacao-diaria', label: 'Programação Diária', icon: '📅', path: '../programacao-diaria/index.html', status: 'active', grupo: 'uso-diario' },
  { id: 'planejamento', label: 'Planejamento', icon: '📚', path: '../planejamento/index.html', status: 'active', grupo: 'uso-diario' },
  { id: 'controlador', label: 'Controlador', icon: '✅', path: '../controlador/index.html', status: 'active', grupo: 'ferramentas' },
  { id: 'banco-atividades', label: 'Banco de Atividades', icon: '🗂️', path: '../banco-atividades/index.html', status: 'active', grupo: 'ferramentas' },
  { id: 'ia', label: 'Inteligência Artificial', icon: '🤖', path: '../inteligencia-artificial/index.html', status: 'active', grupo: 'ferramentas' },
  { id: 'relatorios', label: 'Relatórios', icon: '📊', path: '../relatorios/index.html', status: 'active', grupo: 'ferramentas' },
  { id: 'pei', label: 'PEI', icon: '🧩', path: '../pei/index.html', status: 'active', grupo: 'configuracao' },
  { id: 'configuracoes', label: 'Configurações', icon: '⚙️', path: '../configuracoes/index.html', status: 'active', grupo: 'configuracao' },
];

// Ordem e rótulos das seções da sidebar — chave bate com MODULES[].grupo.
export const GRUPOS_MODULOS = [
  { chave: 'uso-diario', label: 'Uso diário' },
  { chave: 'ferramentas', label: 'Ferramentas' },
  { chave: 'configuracao', label: 'Configuração' },
];

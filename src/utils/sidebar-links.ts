export type SidebarLink = {
  url: string;
  name: string;
  icon: string;
  iconDrop?: string;
  isPainel?: string;
  submenu?: {
    url: string;
    name: string;
  }[]
}

export const sidebarLinks: SidebarLink[] = [
  {name: 'Home', url: '/', icon: 'home'},
  {name: 'Cadastro beneficiário', url: '/cadastro-beneficiario', icon: 'account_circle'},
  {name: 'Agendamento', url: '/agendamento-consulta', icon: 'event'},
  {name: 'Painel Administrativo', isPainel: 'true' , url: '', icon: 'supervised_user_circle', iconDrop: 'keyboard_arrow_down', submenu: [
    {name: 'Cadastrar Hospital', url: '/painel/cadastro-hospital'},
    {name: 'Cadastrar Médico', url: '/painel/cadastro-medico'},
    {name: 'Cadastrar Especialidade', url: '/painel/cadastro-especialidade'},
    {name: 'Cadastrar Disponibilidade', url: '/painel/cadastro-disponibilidade'}
  ]}
]

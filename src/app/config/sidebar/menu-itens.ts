export class MenuItens{
    menuItems = [
        {
            route: "notification",
            iconClass: 'pi pi-bell',
            tooltip: 'Notificações',
            name: 'Notificações',
            submenu: []
        },
        {
            route: "dashboard",
            iconClass: 'pi pi-chart-bar',
            tooltip: 'Dashboard',
            name: 'Dashboard',
            submenu: []
        },
        {
            iconClass: "pi pi-check-square",
            tooltip: "Cadastros",
            name: 'Cadastros',
            submenu: [
                {
                    name: 'Pessoas',
                    submenu: [
                      {
                          route: "register/personMembers",
                          name: 'Membros',
                      },
                      {
                        route: "register/personNewConvert",
                        name: 'Novos Convertidos',
                      },
                      {
                          route: "register/personSupplier",
                          name: 'Fornecedores',
                      },
                      {
                        route: "register/personVisitor",
                        name: 'Visitantes',
                      }
                    ]
                },
                {
                  name: 'Financeiro',
                  submenu: [
                    {
                      route: "planAccount",
                      name: 'Plano de contas',
                    },
                    {
                      route: "costCenter",
                      name: 'Centro de custo',
                    },
                    {
                      route: "register/cash",
                      name: 'Caixas',
                    },
                    {
                      route: "register/bank",
                      name: 'Bancos',
                    }
                  ]
                },
                {
                    name: 'Outros',
                    submenu: [
                      {
                          route: "register/positions",
                          name: 'Cargos',
                      }
                    ]
                }
            ]
        },
        {
            iconClass: "pi pi-money-bill",
            tooltip: "Financeiro",
            name: 'Fiannceiro',
            submenu: [
                {
                    name: 'Receitas',
                    route:'register/revenues'
                },
                {
                    name: 'Despesas',
                    route: 'register/expenses'
                },
                {
                  name: 'Movimentações',
                  submenu: [
                    {
                      name: 'Caixas',
                      route:'register/revenues'
                    },
                    {
                      name: 'Extrato',
                      route:'register/revenues'
                    },
                    {
                      name: 'Histórico Fechamento',
                      route:'register/revenues'
                    },
                  ]
                }
            ]
        },
        {
          iconClass: 'pi pi-cog',
          tooltip: 'Configurações',
          name: 'Configurações',
          submenu: [
            {
              name: 'Configurações do usuário',
              route:'register/revenues'
            },
            {
              name: 'Configurações do globais',
              route:'register/revenues'
            },
            {
              name: 'Cadastro de usuários',
              route:'register/revenues'
            },
            {
              name: 'Logout',
              route:'login'
            },
          ]
        },
    ];
}

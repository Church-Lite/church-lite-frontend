export class MenuItens{
    menuItems = [
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
                        route: "register",
                        name: 'Membros',
                    },
                    {
                        route: "dashboard",
                        name: 'Fornecedores',
                    }
                    ]
                },
                {
                    name: 'Outros',
                    submenu: [
                    {
                        route: "dashboard",
                        name: 'Cargos',
                    }
                    ]
                }
            ]
        }
    ];
}
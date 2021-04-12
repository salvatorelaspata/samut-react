export interface NavigationProp{
     items: MenuItemProp[],
     toggle: () => void
}

export interface MenuItemProp {
     id: number,
     text: string,
     color?: string,
     icon?: string,
     path: string,
     toggle?: () => void
}
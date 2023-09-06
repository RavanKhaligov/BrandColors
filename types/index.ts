export interface childrenProps{
    children:React.ReactNode
}
export interface linkProps extends childrenProps {
    isDisabled? : boolean,
    url:string,
}
export interface colorTypes{
    brand_url: string | null,
    colors: string[],
    created: string,
    modified: string,
    old_id: number
    slug: string,
    source_url: string | null,
    title: string,
}

export interface colorSliceTypes{
    items: colorTypes[]
    brandsArray : colorTypes[],
    brands:colorTypes[],
    selectedBrands: string[],
    copied: string,
    isShowing: boolean,
    search: string
}

export interface copiedTypes{
    color: string,
    isShowing: boolean
}
interface FileProp{
     id: string,
     mymeType: string,
     extension: string,
     fileName: string,
     data: string
}

export interface PazienteProp {
     id: string,
     nome: string,
     cognome: string,
     data: string,
     sesso: string,
     cellulare: string,
     citta: string,
     residenza: string,
     patologia: string,
     note: string,
     lon?: number,
     lan?: number
     files?: FileProp[],
}

/**
 * <input prop>
 */
export interface InputProp {
     labelLeft: string,
     labelRight?: string,
     name: string,
     value: string,
     handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

export interface OptionProp {
     key: string,
     value: string
}

export interface SelectProp {
     labelLeft: string,
     labelRight: string,
     handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
     name: string,
     value: string,
     options: OptionProp[]
}
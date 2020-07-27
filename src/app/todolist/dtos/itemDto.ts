export class itemDto{
    name:string;
    files:fileDto[];
    isOpen: boolean;
    isOpenAni: boolean;    
}

export class fileDto{
    name: string;
    url: string;
    date: string;
}
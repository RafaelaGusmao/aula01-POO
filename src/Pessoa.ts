 export class Pessoa {
    
    //ATRIBUTOS
    private nome: string;
    private idade: number;

    //cosntrutor
    public constructor(_nome: string, _idade: number) {
       this.nome =_nome;
       this.idade =_idade;
    }

    //métodos get e set
    public getNome(): string {
        return this.nome;
    }

    public setNome (_nome:string): void{
        this.nome =_nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade (_idade:number): void{
        this.idade = _idade;
    }

    //método diagrama
    public idadePessoa(): number{
        return this.idade;
    }

    public aniversario(): number {
        this.idade++;
        return this.idade;
    }
    public correr(): void {
        console.log(`${this.nome} estácorrendo... RUN ${this.nome} RUN`);
    }

}




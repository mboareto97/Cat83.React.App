import AxiosHelper from "../helpers/AxiosHelper";

export class Cat83DataService{
    static GeraPlanilha(queryParams: { Empresa: any; Mes: any; Formato: any; Ano: any; GerarComErro: boolean; }){
        return AxiosHelper
            .get
            (
                'Cat83', 
                { 
                    params: 
                    { 
                        Empresa: queryParams.Empresa, 
                        Mes: queryParams.Mes, 
                        FormatoExportacao: queryParams.Formato, 
                        Ano: queryParams.Ano, 
                        GerarPlanilhaComErro: queryParams.GerarComErro
                    },
                    headers: 
                    {
                        "Content-type": "application/json"
                    }
                }
            );
    }

    static RemovePlanlinha(queryParams: {Empresa: any, Mes: any, Ano: any}){
        return AxiosHelper
            .delete
            (
                'Cat83',
                {
                    params:
                    {
                        Empresa: queryParams.Empresa,
                        Mes: queryParams.Mes,
                        Ano: queryParams.Ano
                    }
                }
            );
    }

    static TesteEndpoint(idProduto: number){
        return AxiosHelper
            .get
            (
                'Produto/Busca',
                {
                    params:
                    {
                        idProduto: idProduto
                    },
                    headers:
                    {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'x-empresa': '010041'
                    }
                }
            );
    }
}
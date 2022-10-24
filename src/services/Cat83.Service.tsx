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
            )
            .then((response) => console.log(response))
            .catch((error) => {
                console.log(error);
            })
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
            )
            .then((response) => response.data.dados)
            .catch((error) => {
                console.log(error)
            })
    }
}
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SelectInput } from "../components/SelectInput";
import { TextInput } from "../components/TextInput";
import { Switch } from "../components/Switch";
import { Button } from "../components/Button";
import { DownloadSimple, TrashSimple } from "phosphor-react";
import { Cat83DataService } from "../services/Cat83.Service";
import { useState } from "react";
import { MesesType } from "../types/MesesType";
import { EmpresasType } from "../types/EmpresasType";
import { FormatosType } from "../types/FormatosType";
import { Text } from "../components/Text";
import { Toast } from "../components/Toast";
import { ToastViewport } from "@radix-ui/react-toast";

export function Relatorio() {
    const[searchParams, setSearchParams] = useState({
        Empresa: 0, 
        Mes: 0, 
        Formato: 0, 
        Ano: 0, 
        GerarComErro: false
    });

    const[validate, setValidate] = useState({ 
        isValid: true, 
        isValidAno: true, 
        isValidEmpresa: true, 
        isValidMes: true, 
        isValidFormato: true,
    });
    
    const[open, setOpen] = useState(false);

    const handleSearch = () => {
        ValidaCamposGeraPlanilha();

        if(true){
            Cat83DataService.GeraPlanilha(searchParams)
            .then((response) => {
                const linkSource = `data:${response.data.data.contentType};base64,${response.data.data.fileContents}`;
                const downloadLink = document.createElement("a");
                const fileName = response.data.data.fileDownloadName;

                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();
            })
            .catch((error) => {
                console.log(error);
            });
        }        
    };

    const handleDelete = () => {
        ValidaCampoDelete();

        if(true){
            Cat83DataService.RemovePlanilha(searchParams)
            .then((response) => {
                console.log(response)
                if(open){
                    setOpen(false);
                    setTimeout(() => {
                        setOpen(true);
                    }, 400);
                }
                else{
                    setOpen(true);
                }
            })
            .catch((error) => {
                console.log(error)
                if(open){
                    setOpen(false);
                    setTimeout(() => {
                        setOpen(true);
                    }, 400);
                }
                else{
                    setOpen(true);
                }
            });
        }
    };

    const handleChange = (campo:string, event: React.ChangeEvent<HTMLSelectElement>) => {
        type camposSearchParams = keyof typeof searchParams;
        const campoChange = campo as camposSearchParams;
        const value = event.target.value;
        
        setSearchParams({...searchParams, [campoChange]: Number(value)});
    };

    const typeToArray = (value: any) => {
        return Object.keys(value)
                        .filter
                        (
                            (id) => isNaN(Number(id))
                        )
                        .map
                        (
                            (text) => 
                            { 
                                return { 
                                    Value: value[text as keyof typeof value], Text: text
                                }; 
                            }
                        );
    };

    const ValidaCampoDelete = () => {
        const valid = {...validate}

        if(!searchParams.Ano)
            valid.isValidAno = false;
        else         
            valid.isValidAno = true;

        if(!searchParams.Empresa)
            valid.isValidEmpresa = false;
        else
            valid.isValidEmpresa = true;
        
        if(!searchParams.Mes)
            valid.isValidMes = false;
        else
            valid.isValidMes = true;

        setValidate(valid);
    };

    const ValidaCamposGeraPlanilha = () => {
        const valid = {...validate}

        ValidaCampoDelete();

        if(!searchParams.Formato)
            valid.isValidFormato = false;
        else
            valid.isValidFormato = true;
    };

    const MesesArray = typeToArray(MesesType);    
    const EmpresasArray = typeToArray(EmpresasType);
    const FormatosArray = typeToArray(FormatosType);
    
    return(
        <Toast.Container>
            <Header />
            <div className='flex w-screen py-24 gap-14 justify-center'>
                <div className='flex flex-col gap-6 text-gray-900'>
                    <div className='flex flex-col items-center gap-6 tablet:flex-row'>
                        <div className="flex flex-col gap-6 desktop:flex-row">
                            <label htmlFor="Empresa" className="flex flex-col gap-2">
                                <Text className="font-semibold">Empresa</Text>
                                <SelectInput.Root className={!validate.isValidEmpresa ? 'ring-2 ring-red-700' : 'ring-0'}>
                                    <SelectInput.View campo='Empresa' eventChange={handleChange} attachClass={!validate.isValidEmpresa ? 'text-red-700' : 'text-gray-900'}>
                                        <SelectInput.Item dado={EmpresasArray} default='Selecione a empresa...' />
                                    </SelectInput.View>
                                </SelectInput.Root>                                
                            </label>
                            <label htmlFor="Mes" className="flex flex-col gap-2">
                                <Text className="font-semibold">Mês</Text>
                                <SelectInput.Root className={!validate.isValidMes ? 'ring-2 ring-red-700' : 'ring-0'}>
                                    <SelectInput.View campo='Mes' eventChange={handleChange} attachClass={!validate.isValidMes ? 'text-red-700' : 'text-gray-900'}>
                                        <SelectInput.Item dado={MesesArray} default='Selecione o mês...' />
                                    </SelectInput.View>
                                </SelectInput.Root>                                
                            </label>
                        </div>
                        <div className="flex flex-col gap-6 desktop:flex-row">
                        <label htmlFor="Ano" className="flex flex-col gap-2">
                                <Text className="font-semibold">Ano</Text>
                                <TextInput.Root className={!validate.isValidAno ? 'ring-2 ring-red-700 ' : 'ring-0 text-gray-900'} >
                                    <TextInput.Input 
                                        maxLength={4} 
                                        type="year" 
                                        placeholder="Digite aqui o ano..." 
                                        onChange=
                                        {
                                            e => setSearchParams({...searchParams, Ano: Number(e.target.value)})
                                        }
                                        attachClass={!validate.isValidAno ? 'placeholder:text-red-700' : 'placeholder:text-gray-900'}
                                    />
                                </TextInput.Root>
                            </label>
                            <label htmlFor="Formato" className="flex flex-col gap-2">
                                <Text className="font-semibold">Formato de Exportação</Text>
                                <SelectInput.Root className={!validate.isValidFormato ? 'ring-2 ring-red-700' : 'ring-0'}>
                                    <SelectInput.View campo='Formato' eventChange={handleChange} attachClass={!validate.isValidFormato ? 'text-red-700' : 'text-gray-900'}>
                                        <SelectInput.Item dado={FormatosArray} default='Selecione o formato...' />
                                    </SelectInput.View>
                                </SelectInput.Root>                                
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-center tablet:flex-row">                
                        <div className="flex gap-2">
                            <Text className="font-semibold">Gerar com erro</Text>
                            <Switch onCheckedChange={e => setSearchParams({...searchParams, GerarComErro: e.valueOf()})} />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer>
                <Button.Root className="max-w-[192px]">
                    <Button.Icon>
                        <DownloadSimple weight="bold" />
                    </Button.Icon>
                    <Button.Action onClick={handleSearch}>Gerar Relatorio</Button.Action>
                </Button.Root>
                <Button.Root className="max-w-[192px] bg-red-800 hover:bg-red-700">
                    <Button.Icon>
                        <TrashSimple weight="bold" />
                    </Button.Icon>
                    <Button.Action onClick={handleDelete} >Deletar</Button.Action>
                </Button.Root>
            </Footer>
            <Toast.Root 
                open={open} 
                setOpen={setOpen} 
                title='Remover Relatório' 
                description=
                {
                    <Text>Relatório removido com sucesso!</Text>
                } 
                action=
                {
                    <Button.Root>
                        <Button.Action onClick={() => setOpen(false)}>Ok</Button.Action>
                    </Button.Root>
                } 
            />
            <ToastViewport />
        </Toast.Container>
    );
}
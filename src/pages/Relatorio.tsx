import { DownloadSimple, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { SelectInput } from "../components/SelectInput";
import { Switch } from "../components/Switch";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Cat83DataService } from "../services/Cat83.Service";
import { MesesType } from "../types/MesesType";
import { EmpresasType } from "../types/EmpresasType";
import { FormatosType } from "../types/FormatosType";

export function Relatorio() {
    
    const[searchParams, setSearchParams] = useState({Empresa: 0, Mes: 0, Formato: 0, Ano: 0, GerarComErro: false});

    const handleSearch = () => {
        console.log(searchParams);
        Cat83DataService.GeraPlanilha(searchParams);
    };

    const handleDelete = () => {
        Cat83DataService.RemovePlanlinha(searchParams);
    }

    const handleChange = (campo:string, event: React.ChangeEvent<HTMLSelectElement>) => {
        type obj = keyof typeof searchParams;
        const campoChange = campo as obj;
        const value = event.target.value;
        
        setSearchParams({...searchParams, [campoChange]: Number(value)});
    }

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
    }

    
    const MesesArray = typeToArray(MesesType);    
    const EmpresasArray = typeToArray(EmpresasType);
    const FormatosArray = typeToArray(FormatosType);

    return(
        <div className='flex flex-col gap-6 text-gray-900'>
            <div className='flex flex-col items-center gap-6 tablet:flex-row'>
                <div className="flex flex-col gap-6 desktop:flex-row">
                    <label htmlFor="Empresa" className="flex flex-col gap-2">
                        <Text className="font-semibold">Empresa</Text>
                        <SelectInput.Root>
                            <SelectInput.View campo='Empresa' eventChange={handleChange}>
                                <SelectInput.Item dado={EmpresasArray} />
                            </SelectInput.View>
                        </SelectInput.Root>
                    </label>
                    <label htmlFor="Mes" className="flex flex-col gap-2">
                        <Text className="font-semibold">Mês</Text>
                        <SelectInput.Root>
                            <SelectInput.View campo='Mes' eventChange={handleChange}>
                                <SelectInput.Item dado={MesesArray} />
                            </SelectInput.View>
                        </SelectInput.Root>
                    </label>
                </div>
                <div className="flex flex-col gap-6 desktop:flex-row">
                    <label htmlFor="Formato" className="flex flex-col gap-2">
                        <Text className="font-semibold">Formato de Exportação</Text>
                        <SelectInput.Root>
                            <SelectInput.View campo='Formato' eventChange={handleChange}>
                                <SelectInput.Item dado={FormatosArray} />
                            </SelectInput.View>
                        </SelectInput.Root>
                    </label>
                    
                    <label htmlFor="Ano" className="flex flex-col gap-2">
                        <Text className="font-semibold">Ano</Text>
                        <TextInput.Root>
                            <TextInput.Input 
                                maxLength={4} 
                                type="year" 
                                placeholder="Digite aqui o ano..." 
                                onChange=
                                {
                                    e => setSearchParams({...searchParams, Ano: Number(e.target.value)})
                                } 
                            />
                        </TextInput.Root>
                    </label>
                </div>
            </div>
            <div className="flex flex-col items-center tablet:flex-row">                
                <div className="flex gap-2">
                    <Text className="font-semibold">Gerar com erro</Text>
                    <Switch onCheckedChange={e => setSearchParams({...searchParams, GerarComErro: e.valueOf()})} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-end gap-2 tablet:flex-row">
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
                    <Button.Action onClick={handleDelete}>Deletar</Button.Action>
                </Button.Root>
            </div>
        </div>
    )
}
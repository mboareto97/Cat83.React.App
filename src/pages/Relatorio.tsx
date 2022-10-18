import { DownloadSimple, TrashSimple } from "phosphor-react";
import { Button } from "../components/Button";
import { SelectInput } from "../components/SelectInput";
import { Switch } from "../components/Switch";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function Relatorio(){    
    const Empresas = [{Value:'prom', Text: 'Promissao I'}, {Value:'var', Text: 'Varzea Beef'}, {Value:'bat', Text: 'Bataguassu'}];
    const Meses = [{Value:'jan', Text: 'Janeiro'}, {Value:'fev', Text: 'Fevereiro'}, {Value:'mar', Text: 'Março'}];
    const Formato = [{Value:'csv', Text: '.csv'}, {Value:'xlsx', Text: '.xlsx'}];

    return(
        <form className='flex flex-col py-4 px-4 rounded bg-gray-200 gap-6 justify-center'>
            <div className='flex flex-col gap-6 items-center tablet:flex-row'>
                <div className="flex flex-col justify-between gap-6 desktop:flex-row">
                    <label htmlFor="input-1" className="flex flex-col gap-2">
                        <Text className="font-semibold">Empresa</Text>                        
                        <SelectInput Data={Empresas} Placeholder='Selecione a empresa...'/>
                    </label>
                    <label htmlFor="input-2" className="flex flex-col gap-2">
                        <Text className="font-semibold">Mês</Text>
                        <SelectInput Data={Meses} Placeholder='Selecione o mês...'/>
                    </label>
                </div>
                <div className="flex flex-col justify-between gap-6 desktop:flex-row">
                    <label htmlFor="input-3" className="flex flex-col gap-2">
                        <Text className="font-semibold">Formato de Exportação</Text>
                        <SelectInput Data={Formato} Placeholder='Selecione o formato...' />
                    </label>
                    
                    <label htmlFor="input-4" className="flex flex-col gap-2">
                        <Text className="font-semibold">Ano</Text>
                        <TextInput.Root>
                            <TextInput.Input maxLength={4} type="number" placeholder="Digite aqui o ano...">

                            </TextInput.Input>
                        </TextInput.Root>
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center tablet:flex-row">                
                <div className="flex gap-2">
                    <Text className="font-semibold">Gerar planilha com erro</Text>
                    <Switch />
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-end tablet:flex-row">
                <Button.Root className="max-w-[192px]">
                    <Button.Icon>
                        <DownloadSimple weight="bold" />
                    </Button.Icon>
                    <Button.Action type="submit">Gerar Relatorio</Button.Action>
                </Button.Root>
                <Button.Root className="max-w-[192px] bg-red-800 hover:bg-red-700">
                    <Button.Icon>
                        <TrashSimple weight="bold" />
                    </Button.Icon>
                    <Button.Action type="submit">Deletar</Button.Action>
                </Button.Root>
            </div>
        </form>
    )
}
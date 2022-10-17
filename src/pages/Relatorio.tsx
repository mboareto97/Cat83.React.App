import { DownloadSimple, TrashSimple } from "phosphor-react";
import { Button } from "../components/Button";
import { Switch } from "../components/Switch";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function Relatorio(){    
    return(
        <form className='flex flex-col py-4 px-4 rounded bg-gray-200 gap-6 justify-center'>
            <div className='flex flex-col gap-6 items-center tablet:flex-row'>
                <div className="flex flex-col justify-between gap-6 desktop:flex-row">
                    <label htmlFor="input-1" className="flex flex-col gap-2">
                        <Text className="font-semibold">Empresa</Text>
                        <TextInput.Root>
                            <TextInput.Input placeholder="Digite aqui seu texto...">

                            </TextInput.Input>
                        </TextInput.Root>
                    </label>
                    <label htmlFor="input-2" className="flex flex-col gap-2">
                        <Text className="font-semibold">Mês</Text>
                        <TextInput.Root>
                            <TextInput.Input type="month" placeholder="Digite aqui seu texto...">

                            </TextInput.Input>
                        </TextInput.Root>
                    </label>
                </div>
                <div className="flex flex-col justify-between gap-6 desktop:flex-row">
                    <label htmlFor="input-3" className="flex flex-col gap-2">
                        <Text className="font-semibold">Formato de Exportação</Text>
                        <TextInput.Root>
                            <TextInput.Input placeholder="Digite aqui seu texto...">

                            </TextInput.Input>
                        </TextInput.Root>
                    </label>
                    
                    <label htmlFor="input-4" className="flex flex-col gap-2">
                        <Text className="font-semibold">Ano</Text>
                        <TextInput.Root>
                            <TextInput.Input placeholder="Digite aqui seu texto...">

                            </TextInput.Input>
                        </TextInput.Root>
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center tablet:flex-row">                
                <div className="flex gap-2">
                    <Text className="font-semibold">Gerar planilha com erro</Text>
                    <Switch></Switch>
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
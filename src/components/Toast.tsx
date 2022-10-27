import * as ToastPrimitive from '@radix-ui/react-toast';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface ToastContainerProps extends ToastPrimitive.ToastProviderProps{
    children: ReactNode;
}

function ToastContainer(props: ToastContainerProps){
    return(
        <ToastPrimitive.Provider swipeDirection='right' >
            {props.children}
        </ToastPrimitive.Provider>
    )
}

export interface ToastRootProps {
    open: boolean;
    title: string;
    description: ReactNode;
    action:ReactNode;
    setOpen: React.Dispatch<React.SetStateAction<any>>;
}

function ToastRoot(props: ToastRootProps){
    return(
        <ToastPrimitive.Root 
            className=
            {
                clsx
                (
                    "z-50 fixed bottom-4 inset-x-4 w-auto mobile:top-4 mobile:right-4 mobile:left-auto mobile:bottom-auto mobile:w-full mobile:max-w-sm shadow-lg rounded-lg",
                    "bg-gray-50 dark:bg-gray-900",
                    [props.open ? 'animate-toast-slide-in-bottom mobile:animate-toast-slide-in-right' : 'animate-toast-swipe-out'],
                    "duration-300",
                    "focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-75"                   
                )
            }
            open={props.open}
            onOpenChange={props.setOpen}
        >
            <div className='flex'>
                <div className='w-0 flex-1 flex items-center pl-5 py-4'>
                    <div className='w-full'>
                        <ToastPrimitive.Title 
                            className=
                            {
                                clsx
                                (
                                    'mb-1 font-semibold text-sm text-gray-900',                    
                                )
                            }
                        >
                            {props.title}
                        </ToastPrimitive.Title>
                        <ToastPrimitive.Description 
                            className=
                            {
                                clsx
                                (
                                    'm-0 font-sans text-xs text-gray-300',
                                )
                            }                
                        >
                            {props.description}
                        </ToastPrimitive.Description>
                    </div>
                </div>
                <div className='flex flex-col justify-center px-3 py-2'>
                    <ToastPrimitive.Close asChild >
                        {props.action}
                    </ToastPrimitive.Close>
                </div>
            </div>
            
        </ToastPrimitive.Root>
    )
}

export interface ToastViewportProps {}

function ToastViewport(){
    return(
        <ToastPrimitive.Viewport />
    )
}

export const Toast = {
    Container: ToastContainer,
    Root: ToastRoot,
    Viewport: ToastViewport,
}
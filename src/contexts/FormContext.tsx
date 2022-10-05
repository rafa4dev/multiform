import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
    done: boolean;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State,
    dispatch: (action: Action) => void;
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
    done: false
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions{
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub,
    setDone
}

//Reducer
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return{...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        case FormActions.setDone:
            return {...state, done: action.payload}
        default:
            return state;
    }
}

type ChildrenType = {
    children: ReactNode
}

//Provider
export const FormProvider = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error("useForm precisa ser usado dentro do FormProvider");
    }
    return context;
}
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const nav = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            nav('/step2');
        }else {
            alert("Preencha os dados !");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        onChange={handleNameChange}
                        value={(state.name === '' ? '' : state.name)}
                        autoFocus
                    />
                </label>
        
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
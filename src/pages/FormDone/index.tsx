import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { useEffect } from 'react';

export const FormDone = () => {
    const nav = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(()=>{
        if(!state.done && state.name === '' && state.email === '' && state.github === ''){
            nav('/');
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload:4
            })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>cadastro finalizado</p>
                <h1>Feito</h1>
                <p>Agora é só aguarda o nosso contato.</p>

                <hr />
                
            </C.Container>
        </Theme>
    )
}
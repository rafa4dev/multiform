import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';

import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const nav = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            nav('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            nav('/step3');
        }else {
            alert("Preencha os dados !");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name }, o que melhor descreve você?</h1>
                <p>Escolha uma opção que melhor condiz com seu estado atual.</p>

                <hr />
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos!"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="já programo há 2 anos ou mais!"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                
                <Link to="/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
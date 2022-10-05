import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const nav = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        console.log(state);
        if(state.done === false){
            if(state.name === ''){
                nav('/');
            }else{
                dispatch({
                    type: FormActions.setCurrentStep,
                    payload:3
                })
            }
        }else{
            nav('/done');
        }
    }, [])

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleNextStep = () => {
        if(state.email === '' && state.github === ''){
            alert('Preencha os campos');
        }else{
            dispatch({
                type: FormActions.setDone,
                payload: true
            })
            nav('/done');
        }
        
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name }, onde te achamos?</h1>
                <p>Preencha com seus dados para conseguimos entrar em contato.</p>

                <hr />
                <label>
                    Seu e-mail
                    <input 
                        type="email"
                        onChange={handleEmailChange}
                        value={state.email}
                    />
                </label>

                <label>
                    Seu github
                    <input 
                        type="url"
                        onChange={handleGithubChange}
                        value={state.github}
                        autoFocus
                    />
                </label>
        
                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #B8B8D4;
    }

    h1{
        padding: 15px 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        display: block;
        margin-bottom: 40px;
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            font-size: 15px;
            background-color: #02044A;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #FFF;
    }
`;
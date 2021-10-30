import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cinzel', serif;

    }
    body{
        overflow-x: hidden;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        line-height: 35px;
        letter-spacing: 3px;
        @media screen and (max-width: 680px){
            line-height: 25px;
            letter-spacing: 2px;
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: ${({ theme }) => theme.colors.white};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.black};
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.white};
    }
    ::selection{
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
    }
`;

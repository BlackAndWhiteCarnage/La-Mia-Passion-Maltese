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
`;

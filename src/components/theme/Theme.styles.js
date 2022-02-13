import styled from "styled-components";

export const ThemePanel =  styled.div`
    background: ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    cursor: pointer;
    position: fixed;
    right: 0;
    border-radius: 10px 0 0 10px;

    label {
        margin-left: 10px;
    }
`
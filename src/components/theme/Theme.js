import { Flex } from "components/styled/Core.styled";
import { Moon, Sun } from "phosphor-react";
import { ThemePanel } from "./Theme.styles";

const Theme = ({ setActiveTheme, theme, darkTheme }) => {
    const currentTheme = localStorage.getItem("theme");
    const changeTheme = () => {

        if (currentTheme === 'light') {
            setActiveTheme(darkTheme);
            localStorage.setItem('theme', 'dark');
        } else {
            setActiveTheme(theme);
            localStorage.setItem('theme', 'light');
        }
    }
    return <ThemePanel onClick={() => changeTheme()}>

        <Flex alignItems="center">

            {
                currentTheme === 'light' ? <Moon size={32} /> : <Sun size={32} />
            }

        </Flex>

    </ThemePanel>
}

export default Theme;
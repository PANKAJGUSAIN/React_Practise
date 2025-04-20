const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{

    const AvaliableTheme = ['Light' ,'Dark' , 'Contrast']
    const getTheme = ()=>{
        const val = localStorage.getItem('theme');
        if(!val){
            return 'Light'
        }else{
            return val
        }
    }
    const [theme , setTheme] = useState(getTheme());

    const handleThemeChange = (theme) =>{
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{AvaliableTheme , theme  , handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = ()=> useContext(ThemeContext);

export {useTheme , ThemeProvider}
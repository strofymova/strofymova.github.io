import React, { useState, useEffect, useContext} from "react";
import styles from './theme_toggle_button.module.css'; 
import clsx from "clsx";
import { LocaleContext, Theme, ThemeContext } from "../../app/App";
import { useTranslation } from "react-i18next";

const ThemeToggleButton: React.FC = () => {
    const {theme, handleSwitchTheme} = useContext(ThemeContext);
    const [styleName, setStyleName] = useState(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
    useEffect(() => {
        setStyleName(clsx(styles.main, theme === Theme.light ? styles.light : styles.dark));
    }, [theme]);

    const {locale, handleSwitchLocale} = useContext(LocaleContext);
    const {t} = useTranslation();
    
    return (
        <button className={styleName} onClick={handleSwitchTheme}>{t("widgets.changeTheme")}</button>
    )
}

export default ThemeToggleButton;
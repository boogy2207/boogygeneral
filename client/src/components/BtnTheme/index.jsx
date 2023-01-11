import { changeTheme } from "../../store/slices/theme";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function BtnTheme() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <select data-choose-theme>
            <option value="dark">Default</option>
            <option value="lofi">Dark</option>
            <option value="cupcake">Pink</option>
        </select>
    );
};
export default BtnTheme;
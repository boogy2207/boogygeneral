import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/theme";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function BtnTheme() {

    const themeContext = useSelector(state => state.theme.color)
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeTheme(themeContext))
    };

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <select data-choose-theme>
            <option value="">Default</option>
            <option value="lofi">Dark</option>
            <option value="cupcake">Pink</option>
        </select>
    );
};
export default BtnTheme;
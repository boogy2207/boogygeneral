import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/theme";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';

function BtnTheme() {

    const themeContext = useSelector(state => state.theme.color)
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeTheme(themeContext))
    };

    return (
        <Button variant="contained" onClick={handleChange}><Brightness4Icon/></Button>
    );
};
export default BtnTheme;
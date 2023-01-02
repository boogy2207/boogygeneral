import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/theme";

function BtnTheme() {

    const themeContext = useSelector(state => state.theme.color)
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeTheme(themeContext))
    }

    return (
        <button onClick={handleChange}>Change Theme</button>
    )
}
export default BtnTheme;
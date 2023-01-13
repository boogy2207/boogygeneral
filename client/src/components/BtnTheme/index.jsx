import { changeTheme } from "../../store/slices/theme";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useDispatch } from "react-redux";

function BtnTheme() {

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(changeTheme(target.value));
    };

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ];

    return (
        <select
            data-choose-theme
            onChange={handleChange}
            className='select select-primary'
        >
            {themes.map((theme) => (
                <option key={theme} value={theme}>
                    {theme}
                </option>
            ))}
        </select>
    );
};
export default BtnTheme;
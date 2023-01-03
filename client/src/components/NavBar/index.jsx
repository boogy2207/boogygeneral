import { TextField } from "@mui/material";
import useInputChange from "../../hooks/useInputChange";

const initialState = {
    search: '',
    name: ''
}

function NavBar() {
    const { values, handleChange } = useInputChange(initialState)

    return (
            <TextField>AAA</TextField>
    )
};
export default NavBar;
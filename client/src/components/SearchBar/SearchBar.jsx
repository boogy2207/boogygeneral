import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import useInputChange from "../../hooks/useInputChange";
import { getByTitle } from "../../store/slices/books/booksActions";
const initialState = {
  search: "",
};

// function SearchBar({ setCurrentPage }) {
function SearchBar() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();


  const { values, errors, handleChange } = useInputChange(initialState);
   const debounce = useDebounce(values.search,2000)
   console.log(debounce)
   useEffect(()=>{
      if(debounce.length > 0){
         setTitle(debounce)
      }else{
         
      }
   },[debounce])
  // initialStateValues,
  // initialStateErrors

  // function handleInputChange(e) {
  //    e.preventDefault();
  //    setName(e.target.value);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByTitle(title));
    setName("");
    // setCurrentPage(1);
  };
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="searchbar-div">
      <div className="form-control">
        <input
        name="search"
         value={values.search}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>

      <br />
      <div>

        {/* <button onClick={(e) => handleSubmit(e)} type="submit">
          SEARCH
        </button> */}
      </div>
    </div>
  );
}

export default SearchBar;

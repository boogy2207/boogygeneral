import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../store/slices/books";
import validate from "../../helpers/validates";
import useInputChange from "../../hooks/useInputChange";
import Select from "../Select";

const initialStateValues = {
    title: "",
    authors: "",
    description: "",
    category: "",
    pagecount: "",
    imagelink: "",
    language: "",
    price: "",
    Books: [],
};
const initialStateErrors = {
    title: "title name must be a string",
    authors: "authors name must be a string",
    description: "description is a must",
    category: "Choose a category from the list",
    pagecount: "Pagecount is a must",
    imagelink: "Type or paste an image link",
    language: "Choose a language from the list",
    price: "Can be Free book or a price separating decimals by a dot",
};

const Form = () => {
    const dispatch = useDispatch();

    const Books = useSelector((state) => state.Books);

    const { values, errors, handleChange } = useInputChange(initialStateValues, initialStateErrors);

    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);


    const onSubmit = (e) => {
        e.preventDefault(e);
        //   if (!Object.entries(errors).length) {
        //      dispatch(newBook(formValues));
        //      setFormValues({
        //         title: "",
        //         authors: "",
        //         description: "",
        //         category: "",
        //         pagecount: "",
        //         imagelink: "",
        //         language: "",
        //         price: "",
        //      });
        //      alert(formValues.title + " created Succesfully");
        //      history.push("/books"); //or homepage, or whatever
        //   } else {
        //      let e = Object.values(errors);
        //      alert(JSON.stringify("Please correct: " + e));
        //   }
    };

    // function handleSelect(e) {
    //     setFormValues({
    //         ...formValues,
    //         language: [...formValues.language, e.target.value],
    //     });
    //     setErrors(
    //         validate({
    //             ...formValues,
    //             language: [...formValues.language, e.target.value],
    //         })
    //     );
    // }

    return (
        <>
            <Link to='/'>
                <button className="btn m-5">Back!</button>
            </Link>
            <form onSubmit={onSubmit} className="form-control flex items-center justify-center">
                <h1 className="text-5xl font-bold m-3">Upload Book</h1>
                <div>
                    <label className="input-group m-5">
                        <span>Title</span>
                        <input type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.title}
                            onChange={handleChange}
                            name='title'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Authors</span>
                        <input
                            type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.authors.toLowerCase()}
                            onChange={handleChange}
                            name='authors'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Description</span>
                        <textarea
                            type="text"
                            placeholder="Type Here!"
                            className="textarea textarea-bordered textarea-primary w-full max-w-xs"
                            value={values.description.toLowerCase()}
                            onChange={handleChange}
                            name='description'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Category</span>
                        <input
                            type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.category.toLowerCase()}
                            onChange={handleChange}
                            name='category'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Pages</span>
                        <input
                            type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.pagecount.toLowerCase()}
                            onChange={handleChange}
                            name='pagecount'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Image Link</span>
                        <input type="text" placeholder="Type Here!" className="input input-bordered input-primary w-full max-w-xs" />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Languages</span>
                        <input
                            type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.imagelink.toLowerCase()}
                            onChange={handleChange}
                            name='imagelink'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Price</span>
                        <input
                            type="text"
                            placeholder="Type Here!"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={values.imagelink.toLowerCase()}
                            onChange={handleChange}
                            name='imagelink'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <Select
                        className='m-5 select select-primary w-full max-w-xs'
                        value={values.language}
                        handleChange={handleChange}
                        optionsMap={['ES', 'US', 'FR', 'CH']}
                        disabledPlaceHorder={'Select a Language'}
                    />

                </div>
                <div>waiting for a book...</div>
                <button className="btn">Add Book</button>
            </form>
        </>
    );
};

export default Form;


/* 
                            <td>
                                <label>Languages: </label>
                            </td>
                            <td>
                                <select
                                    value={formValues.language}
                                    name='language'
                                    onChange={(e) => handleSelect(e)}>
                                    <option value={""}></option>
                                    
                                    {allBooks.language.map((e) => (
                              <option type='text' value={e.name} key={e.id}>
                                 {e.name}
                              </option>
                           ))}
                                    <option type='text' value={formValues.es}>
                                        ES
                                    </option>
                                    <option type='text' value={formValues.us}>
                                        US
                                    </option>
                                    <option type='text' value={formValues.fr}>
                                        FR
                                    </option>
                                    <option type='text' value={formValues.ch}>
                                        CH
                                    </option>
                                </select >
                            </td >
                        </tr >
    <tr>
        <td>
            <label>Price: </label>
        </td>
        <td>
            <input
                value={formValues.price.toLowerCase()}
                onChange={handleInputChange}
                name='price'
                size='25'
                type='text'
                placeholder='Type the name of the price'></input>
        </td>
    </tr>
                    </tbody >
                </table >
*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../store/slices/books";

const Form = () => {
    const dispatch = useDispatch();

    const Books = useSelector((state) => state.Books);

    const [formValues, setFormValues] = useState({
        title: "",
        authors: "",
        description: "",
        category: "",
        pagecount: "",
        imagelink: "",
        language: "",
        price: "",
        Books: [],
        //Languages: [],
    });

    const [errors, setErrors] = useState({
        title: "title name must be a string",
        authors: "authors name must be a string",
        description: "description is a must",
        category: "Choose a category from the list",
        pagecount: "Pagecount is a must",
        imagelink: "Type or paste an image link",
        language: "Choose a language from the list",
        price: "Can be Free book or a price separating decimals by a dot",
    });

    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    useEffect(() => console.log(), []);

    function validate(form) {
        let error = {};
        if (!form.title) {
            error.title = "Type a title";
        }
        if (!form.authors) {
            error.authors = "Type a authors";
        }

        if (!form.description) {
            // alert("description is a must");
            error.description = "Type a description";
        }
        if (!form.category) {
            // alert("category is a must");
            error.category = "Type a category";
        }
        if (!form.pagecount) {
            error.pagecount = "Type number of pages";
        }
        if (!form.language) {
            error.language = "Choose a language";
        }
        if (!form.price) {
            error.price =
                "Could be Free book or a price separating decimals by a dot, but not empty";
        }
        return error;
    }

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

    function handleSelect(e) {
        setFormValues({
            ...formValues,
            language: [...formValues.language, e.target.value],
        });
        setErrors(
            validate({
                ...formValues,
                language: [...formValues.language, e.target.value],
            })
        );
    }

    const handleInputChange = (e) => {
        setErrors(
            validate({
                ...formValues,
                [e.target.name]: e.target.value,
            })
        );

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='form'>
            <div>Books Form</div>
            <br />
            <div>
                <Link to='/'>
                    <button className="btn">Back!</button>
                </Link>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <h2> Add new Book</h2>
                </div>
                <table align='center'>
                    <tbody>
                        <tr>
                            <td>
                                <label>Title: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.title}
                                    onChange={handleInputChange}
                                    name='title'
                                    size='25'
                                    type='textarea'
                                    placeholder='Type a Title'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Authors: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.authors.toLowerCase()}
                                    onChange={handleInputChange}
                                    name='authors'
                                    size='25'
                                    type='text'
                                    placeholder='Type the authors'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Description: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.description.toLowerCase()}
                                    onChange={handleInputChange}
                                    name='description'
                                    size='25'
                                    type='text'
                                    placeholder='Type books description'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Category: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.category.toLowerCase()}
                                    onChange={handleInputChange}
                                    name='category'
                                    size='25'
                                    type='text'
                                    placeholder='Type category type'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Pages: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.pagecount.toLowerCase()}
                                    onChange={handleInputChange}
                                    name='pagecount'
                                    size='25'
                                    type='text'
                                    placeholder='Type number of pages'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Image Link: </label>
                            </td>
                            <td>
                                <input
                                    value={formValues.imagelink.toLowerCase()}
                                    onChange={handleInputChange}
                                    name='imagelink'
                                    size='25'
                                    type='text'
                                    placeholder='Type a link to image'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Languages: </label>
                            </td>
                            <td>
                                <select
                                    value={formValues.language}
                                    name='language'
                                    onChange={(e) => handleSelect(e)}>
                                    <option value={""}></option>
                                    {/* Or mapping languages in API */}
                                    {/* {allBooks.language.map((e) => (
                              <option type='text' value={e.name} key={e.id}>
                                 {e.name}
                              </option>
                           ))} */}
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
                                </select>
                            </td>
                        </tr>
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
                    </tbody>
                </table>
                <br />
                <div>waiting for a book...</div>

                <br />
                <button className="btn" >Add Book</button>
            </form>
        </div>
    );
};

export default Form;
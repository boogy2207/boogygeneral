function Select({ value, handleChange, optionsMap, disabledPlaceHorder, className }) {


    return (
        <select
            className={className}
            value={value}
            name='language'
            onChange={handleChange}
        >
            <option value='' disabled selected>{disabledPlaceHorder}</option>
            {/* {allBooks.language.map((e) => (
                <option type='text' value={e.name} key={e.id}>
                    {e.name}
                </option>
            ))} */}
            {
                optionsMap.map((opt) => {
                    return (
                        <option key={opt} value={opt}>{opt}</option>
                    )
                })
            }
        </select >
    );
};
export default Select;
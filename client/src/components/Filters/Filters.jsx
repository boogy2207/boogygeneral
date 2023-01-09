import { useDispatch, useSelector } from "react-redux"
import { filter, price } from "../../store/slices/books"

export default function Filtros({ paged }) {

    const dispatch = useDispatch()

    const books = useSelector(state => state.books)

    function handleSelect(e) {

        if (e.target.value === 'ASC' || e.target.value === 'DESC') {
            dispatch(price(e.target.value))
        }
        else {
            dispatch(filter(e.target.value))
        }

    }

    return (
        <div className='m-10 flex-auto'>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ASC'>
                <option disabled selected>Price</option>
                <option value="ASC">Mayor a Menor </option>
                <option value="DESC">Menor a Mayor</option>
            </select>

            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='A-Z'>
                <option disabled selected>Alphabetic</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>


            <select onChange={e => handleSelect(e)} className="select select-primary w-full max-w-xs" defaultValue='ALL'>
                <option selected disabled>Genre</option>
                <option value="ALL">ALL</option>
                {
                    books.allBookys?.map(e => {
                        return <option value={e.category} key={e.id}>{e.category}</option>
                    })
                }
            </select>

        </div>
    )

}

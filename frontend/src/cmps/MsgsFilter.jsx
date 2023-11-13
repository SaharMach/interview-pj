// import { useForm } from "./customHooks/useForm";
import { useForm } from '../customHooks/useForm';
import { useDispatch } from 'react-redux';
import { setFilterBy } from '../store/msgs.actions';
export function MsgsFilter() {
    const dispatch = useDispatch();
    const [filterFields, handleFilterChange] = useForm({ filter: '' });

    const onFilterChange = (e) => {
        handleFilterChange(e);
        setFilterBy({ ...filterFields, filter: e.target.value })
    };

    return (
        <form className="msgs-filter">
            <input
                type="text"
                name="filter"
                value={filterFields.filter}
                onChange={onFilterChange}
                placeholder="Filter messages"
            />
        </form>
    );
}

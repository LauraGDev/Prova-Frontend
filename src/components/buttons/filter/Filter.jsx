import "./filter.scss";

const Filter = ({ text, id, onChange }) => {
    return (
        <div className="checkbox-button">
            <input type="checkbox" id={id} onChange={onChange} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default Filter;

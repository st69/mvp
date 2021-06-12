import Input from './../components/common/Input';
import Textarea from './../components/common/Textarea';

const regEmail = /^\S+@\S+\.\S+$/;

export const setInputType = (data, key, handleChange, handleCheckbox) => {
    switch (true) {
        case key === 'id':
            return data === '' && <Input type='text' name={key} onBlur={handleChange} />
        case regEmail.test(data):
            return <Input type='email' name={key} onChange={handleChange} value={data} />
        case typeof data === 'number':
            return <Input type='number' name={key} onChange={handleChange} value={data} pattern="[0-9]*" />
        case typeof data === 'boolean':
            return <Input type='checkbox' name={key} onChange={handleCheckbox} checked={data} />
        case isValidDate(data):
            return <Input type='date' name={key} onChange={handleChange} value={data.substring(0, 10)} />
        case typeof data === 'string' && data.length > 50:
            return <Textarea name={key} onChange={handleChange} value={data} minlength="51" />
        case typeof data === 'string' && data.length <= 50:
            return <Input type='text' name={key} onChange={handleChange} value={data} />
        default:
            return <Input type='text' name={key} onChange={handleChange} value={data} />
    }
}


export const isValidDate = (data) => {
    const date = new Date(data);
    if (date.toString() !== "Invalid Date" && !isNaN(date)) {
        if (data.substring(0, 10) === date.toISOString().substring(0, 10)) {
            return true
        } else {
            return false
        }
    }
    else {
        return false
    }
}
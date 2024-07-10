
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    // const[name, setName] = useInputState('jahid hasan');
    const emailState = useInputState('hasan@jahid.com');
    
    const handleSubmit = e =>{
        console.log('Form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name}  onChange={setName} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
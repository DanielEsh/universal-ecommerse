export const SignInForm = () => {

    const onSubmit = (event) => {
        event.preventDefault();

        console.log('submit');
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                Name
                <input type="text" />
            </div>
            <div>
                password
                <input type="text" />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

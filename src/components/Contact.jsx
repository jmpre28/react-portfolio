
export default function ContactForm() {
    return (
        <form>
            <h2>Contact Me!</h2>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
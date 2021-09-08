const ContactPage = () => {
    return ( 
    <div className="contact-page">
        <h2>Contact Page</h2>
        <form className="contact-form" action="" method="POST">
            <div className="single-line-input-container">
            <label htmlFor="contact-form-name-input">Name: </label>
            <input id="contact-form-name-input" className="contact-form-user-input single-line-input" type="text"></input>
            </div>

            <div className="single-line-input-container">
            <label htmlFor="contact-form-email-input">Email: </label>
            <input id="contact-form-email-input" className="contact-form-user-input single-line-input" type="email"></input>
            <br/>
            </div>

            <label htmlFor="contact-form-content-input"></label>
            <textarea id="contact-form-content-input" className="contact-form-user-input" rows="4"></textarea>
            
        </form>
    </div>
    );
}
 
export default ContactPage;
function Contact() {
    return (
      <div>
        <h1>Kontakta oss</h1>
        <form>
          <input type="text" placeholder="Ditt namn" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Ditt meddelande"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  
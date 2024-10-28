import ContactForm from '../components/ContactForm';

const Contact = () => (
  <section
    id="contact"
    className="min-h-[calc(100vh-5.5rem)] flex flex-col justify-center items-center pt-28 px-4 bg-gray-100 dark:bg-gray-900"
  >
    <ContactForm />
  </section>
);

export default Contact;


const Contact = () => (
  <div className="p-8 dark:text-white">
    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
    <p className="text-lg text-gray-700 dark:text-gray-100">
      If you'd like to reach out, feel free to contact me via the form below.
    </p>
    <form className="mt-6 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 border border-gray-300 rounded-lg"
        rows={5}
      ></textarea>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;

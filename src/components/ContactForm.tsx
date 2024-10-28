import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Form, json, useActionData, useNavigation } from 'react-router-dom';
import { ContactFormActionData } from "../model/types.ts";

const ContactForm = () => {
  const actionData = useActionData() as ContactFormActionData;
  const navigation = useNavigation()

  const submitting = navigation.state === "submitting";

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (actionData?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [actionData]);

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Contact Me</h2>
      <Form
        ref={formRef}
        method="POST"
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4"
      >
        <label className="block">
          <span className="text-gray-700 dark:text-gray-200">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 dark:text-gray-200">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 dark:text-gray-200">Message</span>
          <textarea
            name="message"
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={5}
          ></textarea>
        </label>
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 px-4 rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-200"
        >
          {submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </Form>
      <div className="mt-4 min-h-[2rem] flex items-center justify-center">
        {actionData?.success && (
          <p className="text-green-600">Thank you! Your message has been sent successfully.</p>
        )}
        {actionData?.error && (
          <p className="text-red-600">Oops! Something went wrong. Please try again.</p>
        )}
      </div>
    </>
  );
};

export default ContactForm;

export const action = async ({ request }: { request: Request }) => {
  const method = request.method;
  const formEndpoint = 'https://formspree.io/f/mjkvgepb';

  const formData = await request.formData();

  const response = await fetch(formEndpoint, {
    method: method,
    headers: { 'Accept': 'application/json' },
    body: formData,
  });

  if (response.ok) {
    return json({ success: true });
  } else {
    return json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}

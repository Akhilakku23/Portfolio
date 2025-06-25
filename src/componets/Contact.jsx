import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-semibold">Get in Touch</h2>
      
      <div className="text-center tracking-tighter">
        <address className="my-4 text-lg">
          <p>{CONTACT.address}</p>
          <p>{CONTACT.phoneNo}</p>
        </address>

        <a href="mailto:aneenashyjan@gmail.com" className='hover:underline'>
                    <p>{CONTACT.email}</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;

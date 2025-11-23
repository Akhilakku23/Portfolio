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

        {/* <a href="mailto:akhilsaji0031@gmail.com" className='hover:underline'>
                    akhilsaji0031@gmail.com
        </a> */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akhilsaji0031@gmail.com"
          target="_blank"
          className="hover:underline"
        >
          akhilsaji0031@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;

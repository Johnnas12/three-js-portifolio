import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const formRef = useRef();
    const [loading, setloading] = useState(false)
    const [form, setForm] = useState({
        name: '', 
        email: '', 
        message: ''
    })
    // service_8cql13e
    //service_8cql13e

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)

        try{
          await emailjs.send(
                        'service_8cql13e', 
                        'template_04vpcrh', 
                        {
                        from_name: form.name,
                        to_name: 'Yohanes',
                        from_email: form.email,
                        to_email: 'yohanesmesfin3@gmail.com', 
                        message: form.message
                    },
                    'UyDjMxOuRZj55naYA'
                 )
                    setloading(false)
                    alert("your message has been sent!")
                    setForm({
                        name: '',
                        email: '',
                        message: '' 
                    })
                }catch(error) {
                    setloading(false)
                    console.log(error)
                    alert("Something went wrong!")

                }
     
        
    }

  return (
    <section className="c-space my-20">

        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="background" className="absolute inset-0 min-h-screen"/>
            <div className="contact-container">
                <h3 className="head-text">Lets Talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Wether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I am here for you
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                    </label>
                    <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="John Doe"
                    />

                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                    </label>
                    <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="johndoe@gmail.com"
                    />

                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                    </label>
                    <textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Hi, I would like to discuss..."
                    />
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...': 'Send Message'}

                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contacts
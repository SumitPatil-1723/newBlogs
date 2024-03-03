import {
  Alert,
  Button,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useState } from "react";
export default function ContactUs() {
  const [formData, setFromData] = useState({});
  const [contactError, setContactError] = useState(null);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user/contact',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json',
      },
        body: JSON.stringify(formData),
      });
    const data = await res.json(); 
    if(!res.ok){
      setContactError(data.message);
      return
    }
    if (res.ok){
      setContactError("Your contact details submitted successfully.");
    }
  }catch (error){
    setContactError("Someting went wrong")
  }
  };
  return (
    <div className="min-h-auto mb-20 mt-20">
      <div className="flex p-3 max-w-xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your name" />
              <TextInput
                type="text"
                placeholder="Name"
                required
                id="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Message" />
              <Textarea
                type="text"
                placeholder="Message"
                id="message"
                onChange={handleChange}
              />
            </div>
            <Button color="purple" type="submit" outline >
              <span>Submit</span>
            </Button>
          </form>
          { contactError && (
             <Alert dismissTimeout={5000} className='mt-5'color= 'success'>
                {contactError}
              </Alert>)       
          }
        </div>
      </div>
    </div>
  );
}

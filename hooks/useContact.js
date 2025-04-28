import { useState } from 'react';
import Swal from 'sweetalert2';
import { validateEmail } from '@/lib/utils';
import toast from 'react-hot-toast';

const MSG_THANKS_TITLE = 'Thank You!';
const MSG_THANKS_CONTENT = '📬 Your message has been sent! Thank you for getting in touch.';

const ERR_VALIDATION_ALL = 'Please fill out all fields before sending!';
const ERR_VALIDATION_EMAIL = 'Please enter a valid email address!';
const ERR_VALIDATION_MSG = 'Please enter a message min 20 characters!';
const ERR_SEND_MESSAGE = 'An error occured. Please try again!';

export const useContact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const playSound = (type = 'oops') => {
    const soundFile = type === 'success' ? '/sounds/success.wav' : '/sounds/oops.wav';
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      playSound();
      return toast.error(ERR_VALIDATION_ALL);
    }

    if (!validateEmail(email)) {
      playSound();
      return toast.error(ERR_VALIDATION_EMAIL);
    }

    if (message.length <= 20) {
      playSound();
      return toast.error(ERR_VALIDATION_MSG);
    }

    // TODO: Handle Backend API for sending the message into database
    try {
      setIsSending(true);
      const response = await fetch(`/api/send-message`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonData = await response.json();

      if (jsonData?.success) {
        Swal.fire({
          title: MSG_THANKS_TITLE,
          text: MSG_THANKS_CONTENT,
          icon: 'success',
          confirmButtonColor: '#ad1dbb',
        });
        playSound('success');
        setFormData(initialFormData);
      } else {
        toast.error(ERR_SEND_MESSAGE);
      }
    } catch (error) {
      console.error(error);
      toast.error(ERR_SEND_MESSAGE);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isSending,
  };
};

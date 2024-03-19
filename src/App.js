import React, { useState } from 'react';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {

    if (!formData.username) {
      return;
    }

    if (formData.email.indexOf('@') === -1) {
      alert("Invalid email");
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number");
      return;
    }

    const currentDate = new Date();
    if (new Date(formData.dob) >= currentDate) {
      alert("Invalid date of birth");
      return;
    }

    setFormData({
      username: '',
      email: '',
      dob: '',
      phone: ''
    });
  };

  return (
    <div className='App'>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} required />
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" required />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
            </form>
            <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

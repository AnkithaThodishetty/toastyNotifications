import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

const Toast = () => {
  const notifySuccess = () => toast.success("Success message!");
  const notifyError = () => toast.error("Error message!");
  const notifyInfo = () => toast.info("Info message!");
  const notifyWarning = () => toast.warn("Warning message!");
  const notifyDefault = () => toast("Default message!"); 
  const notifyDark = () => toast.dark("Dark message!"); 
  const notifyLight = () => toast.light("Light message!"); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button className="button button-success" onClick={notifySuccess}>Success</button>
      <button className="button button-error" onClick={notifyError}>Error</button>
      <button className="button button-info" onClick={notifyInfo}>Info</button>
      <button className="button button-warning" onClick={notifyWarning}>Warning</button>
      <button className="button button-default" onClick={notifyDefault}>Default</button>
      <button className="button button-dark" onClick={notifyDark}>Dark</button>
      <button className="button button-light" onClick={notifyLight}>Light</button>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Toast;


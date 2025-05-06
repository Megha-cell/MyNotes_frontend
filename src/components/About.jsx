import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">About Notes App</h1>
        <p className="lead">
          The Notes App is a simple and user-friendly tool designed to help you
          organize your thoughts, ideas, and daily tasks all in one place. Whether
          you’re jotting down a quick reminder or writing a detailed to-do list,
          this app makes it easy to stay productive and keep everything important
          within reach.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">📝 Create Notes</h5>
              <p className="card-text">
                Quickly write and save notes whenever inspiration strikes.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">✏️ Edit Notes</h5>
              <p className="card-text">
                Update your notes anytime — change text, correct mistakes, or add more
                information.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">🗑️ Delete Notes</h5>
              <p className="card-text">
                Remove notes you no longer need to keep your space clean and organized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

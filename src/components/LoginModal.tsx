import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={toggleModal}>Log In</button>
        </li>
      </ul>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <form>
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <div className="modal-actions">
                <button type="submit">Log In</button>
                <button type="button" onClick={toggleModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import { useForm } from "../hooks/useForm";

export const FormsApp = () => {

  const initialForm = {
    userName: '',
    mail: '',
    password: '',
  };

  const { userName, mail, password, onInputChange} = useForm(initialForm)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userName, mail, password);
  }


  return (
    <>
    <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userName}
            onChange={onInputChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="mail"
           className="form-label">
            Email
          </label>
          <input
            type="mail"
            className="form-control"
            id="mail"
            name="mail"
            value={mail}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

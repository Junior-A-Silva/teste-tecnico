import "./style.css";
const FormCadastro = () => {
  return (
    <div>
      <h2>Cadastro</h2>
      <div id="formCadastro"></div>
      <form>
        <div className="formLine">
          <label for="fullname">Nome Completo</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
        <div className="formLine">
          <label for="email">E-mail</label>
          <input type="text" id="lname" name="lname"></input>
        </div>

        <div className="formLine">
          <label for="phone01">Telefone 01</label>
          <input type="text" id="lname" name="lname"></input>
        </div>

        <div className="formLine">
          <label for="phone02">Telefone 02</label>
          <input type="text" id="lname" name="lname"></input>
        </div>

        {/* <input type="submit" value="Submit"></input> */}
      </form>
      <button>Cadastrar</button>
    </div>
  );
};
export default FormCadastro;

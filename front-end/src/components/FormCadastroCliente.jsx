import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const FormCadastroCliente = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    phone: yup.string().required("Fone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => console.log(data);

  return (
    <div>
      {" "}
      <div className="formContainer">
        <h3>Cadastro de Cliente</h3>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input placeholder="E-mail" {...register("email")} />
          {errors.email?.message}
          <input placeholder="Telefone" {...register("phone")} />
          {errors.email?.message}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormCadastroCliente;

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const FormCadastroContato = () => {
  const formSchema = yup.object().shape({
    email01: yup.string().required("E-mail obrigatório"),
    // email02: yup.string(),
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
        <h3>Cadastro de Contato</h3>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input placeholder="E-mail" {...register("email01")} />
          {errors.email01?.message}
          <input placeholder="E-mail" {...register("email02")} />
          <input placeholder="Telefone" {...register("phone")} />
          {errors.phone?.message}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormCadastroContato;

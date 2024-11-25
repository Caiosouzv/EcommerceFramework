import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados do cadastro:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirme sua Senha:
          <input
            type="password"
            name="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;

import React from "react";

const FormCard = ({user}) => {
  return (
    <div>
      <h4>Se ha logueado con éxito!</h4>
      <h4>Email: {user.email}</h4>
      <h4>Pass: {user.pass}</h4>
    </div>
  );
};

export default FormCard;

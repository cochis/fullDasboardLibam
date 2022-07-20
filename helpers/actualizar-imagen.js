const fs = require("fs");
const Usuario = require("../models/usuario");
const Padre = require("../models/padre");
const Grupo = require("../models/grupo");

const borrarImagen = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};
const actualizarImagen = async (tipo, id, nombreArchivo) => {
  let pathViejo = "";
  switch (tipo) {
    case "grupos":
      const grupo = await Grupo.findById(id);
      if (!grupo) {
        return false;
      }
      pathViejo = `./uploads/grupos/${grupo.img}`;
      borrarImagen(pathViejo);
      grupo.img = nombreArchivo;
      await grupo.save();
      return true;
      break;
    case "padres":
      const padre = await Padre.findById(id);
      if (!padre) {
        return false;
      }
      pathViejo = `./uploads/padres/${padre.img}`;
      borrarImagen(pathViejo);
      padre.img = nombreArchivo;
      await padre.save();
      return true;
      break;
    case "usuarios":
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        return false;
      }
      pathViejo = `./uploads/usuarios/${usuario.img}`;
      borrarImagen(pathViejo);
      usuario.img = nombreArchivo;
      await usuario.save();
      return true;
      break;

    default:
      break;
  }
};

module.exports = {
  actualizarImagen,
};

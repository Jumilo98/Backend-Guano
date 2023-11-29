  import "../Database/relaciones.js";
  import { Comentario } from "../Models/comentario.js"
  import { Punto } from "../Models/punto.js"
  import { Producto } from "../Models/producto.js";

  //CRUD basico para el modelo Comentarios

  // Obtener la lista de comentarios de producto
  export const getAllComentariosPr  = async (req, res) => {
    const pagina = parseInt(req.query.pagina) || 1; // Obtiene el número de página desde la consulta, por defecto es 1
    const limite = 8;
    const offsetdinamic = (pagina - 1) * limite;
    try {
        const allComentarios =  await Comentario.findAndCountAll({
          include: [
            { model: Producto }
          ],
          order: [
            ['id_comentario', 'DESC']
          ],
          limit: limite,
          offset:offsetdinamic 
        });
        res.json(allComentarios);
        console.log("Mostrando comentarios registrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

    // Obtener la lista de comentarios de punto
    export const getAllComentariosP  = async (req, res) => {
      const pagina = parseInt(req.query.pagina) || 1; // Obtiene el número de página desde la consulta, por defecto es 1
      const limite = 8;
      const offsetdinamic = (pagina - 1) * limite;
      try {
          const allComentarios =  await Comentario.findAndCountAll({
            include: [
              { model: Punto }
            ],
            order: [
              ['id_comentario', 'DESC']
            ],
            limit: limite,
            offset:offsetdinamic 
          });
          res.json(allComentarios);
          console.log("Mostrando comentarios registrados...");
      } catch (error) {
          return res.status(500).json({message:error.message});
      }
    };


  // Obtener un comentario en especifico de productos 
  export const getComentarioPrById = async (req, res) => {
    try {
      const { id_comentario } = req.params;
      const oneComentario = await Comentario.findByPk(id_comentario,{
        include: [
          { model: Producto }
        ]
      });
      if (!oneComentario)
        return res.status(404).json({ message: "Comentario no registrado" });
      res.json(oneComentario);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

// Obtener un comentario en especifico de puntos
export const getComentarioPById = async (req, res) => {
  try {
    const { id_comentario } = req.body;
    const oneComentario = await Comentario.findByPk(id_comentario,{
      include: [
        { model: Punto }
      ]
    });
    if (!oneComentario)
      return res.status(404).json({ message: "Comentario no registrado" });
    res.json(oneComentario);
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

  //Crear un comentario para productos
  export const createComentarioPr = async (req, res) => {
    // Espera recibir un paramentro "mensaje" para crear el comentario
    const { id_producto } = req.params; 
    const { mensaje } = req.body; // las foreign keys se les escribe tal y como son
    try {
        // Creando un nuevo objeto comentario con el metodo create
        const nuevoComentario =  await Comentario.create({
            mensaje_comentario: mensaje,     
            id_producto
        });
        res.json(nuevoComentario);
        console.log("Nuevo Comentario creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

  //Crear un comentario para productos
  export const createComentarioP = async (req, res) => {
    // Espera recibir un paramentro "mensaje" para crear el comentario
    const { id_punto } = req.params; 
    const { mensaje } = req.body; // las foreign keys se les escribe tal y como son
    try {
        // Creando un nuevo objeto comentario con el metodo create
        const nuevoComentario =  await Comentario.create({
            mensaje_comentario: mensaje,     
            id_punto
        });
        res.json(nuevoComentario);
        console.log("Nuevo Comentario creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

  // Actualizar un comentario de produto
  export const updateComentarioPr = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const { newMensaje } = req.body;
      const comentarioActualizado = await Comentario.findOne({
        where: { id_comentario }
      });
      // Validación
      if(!comentarioActualizado) {
       return res.status(404).json({mensaje: 'Comentario no encontrado'});
      }
      comentarioActualizado.mensaje_comentario = newMensaje;
      if(await comentarioActualizado.save()) {
        res.json({mensaje: 'Comentario actualizado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizar un comentario de punto
  export const updateComentarioP = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const { newMensaje } = req.body;
      const comentarioActualizado = await Comentario.findOne({
        where: { id_comentario }
      });
      // Validación
      if(!comentarioActualizado) {
       return res.status(404).json({mensaje: 'Comentario no encontrado'});
      }
      comentarioActualizado.mensaje_comentario = newMensaje;
      if(await comentarioActualizado.save()) {
        res.json({mensaje: 'Comentario actualizado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Borrar un comentario de producto
  export const deleteComentarioPr = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const comentarioEliminado = await Comentario.destroy({
        where: {
          id_comentario: id_comentario,
        },
      });
      if(await comentarioEliminado.destroy()) {
        res.json({mensaje: 'Comentario eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

   // Borrar un comentario de punto
   export const deleteComentarioP = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const comentarioEliminado = await Comentario.destroy({
        where: {
          id_comentario: id_comentario,
        },
      });
      if(await comentarioEliminado.destroy()) {
        res.json({mensaje: 'Comentario eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
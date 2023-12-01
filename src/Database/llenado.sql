--Llenado de tabla usuarios
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Jimmy', 'Granizo', 'granizo1998@hotmail.com', 'Granizo1998', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Luuis', 'Granizo', 'granizo19@hotmail.com', 'Granizo19', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Andres', 'Granizo', 'granizo@hotmail.com', 'Granizo', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Jonna', 'Granizo', 'grani@hotmail.com', 'Grani', NOW(), NOW());

--Llenado de tabla Etiquetas
INSERT INTO public."Etiquetas" (nombre_etiqueta) 
VALUES ('Ciclismo');
INSERT INTO public."Etiquetas" (nombre_etiqueta) 
VALUES ('Camping');
INSERT INTO public."Etiquetas" (nombre_etiqueta) 
VALUES ('Sendero');
INSERT INTO public."Etiquetas" (nombre_etiqueta) 
VALUES ('Hotel');

--Llenado de tabla puntos
INSERT INTO public."Puntos" (nombres_punto, descripcion_punto, likes_punto, "createdAt", "updatedAt", id_etiqueta, id_usuario) 
VALUES ('Pailon', 'Es un pailon para visitar',1, NOW(), NOW(), 1, 1);
INSERT INTO public."Puntos" (nombres_punto, descripcion_punto, likes_punto, "createdAt", "updatedAt", id_etiqueta, id_usuario) 
VALUES ('Pailon2', 'Es un pailon2 para visitar',2, NOW(), NOW(), 2, 2);
INSERT INTO public."Puntos" (nombres_punto, descripcion_punto, likes_punto, "createdAt", "updatedAt", id_etiqueta, id_usuario) 
VALUES ('Pailon3', 'Es un pailon3 para visitar',3, NOW(), NOW(), 3, 3);
INSERT INTO public."Puntos" (nombres_punto, descripcion_punto, likes_punto, "createdAt", "updatedAt", id_etiqueta, id_usuario) 
VALUES ('Pailon4', 'Es un pailon4 para visitar',4, NOW(), NOW(), 4, 4);

--Llenado de tabla productos
INSERT INTO public."Productos" (nombres_producto, etiqueta_producto, precio_producto, descripcion_producto, likes_producto, "createdAt", "updatedAt", id_usuario) 
VALUES ('Leche', 'Leche', 2.4 ,'Es una Leche para vender',1, NOW(), NOW(), 1);
INSERT INTO public."Productos" (nombres_producto, etiqueta_producto, precio_producto, descripcion_producto, likes_producto, "createdAt", "updatedAt", id_usuario) 
VALUES ('Leche2', 'Queso', 2.4 ,'Es una Leche2 para vender',2, NOW(), NOW(), 2);
INSERT INTO public."Productos" (nombres_producto, etiqueta_producto, precio_producto, descripcion_producto, likes_producto, "createdAt", "updatedAt", id_usuario) 
VALUES ('Leche3', 'Yogurt', 2.4 ,'Es una Leche3 para vender',3, NOW(), NOW(), 3);
INSERT INTO public."Productos" (nombres_producto, etiqueta_producto, precio_producto, descripcion_producto, likes_producto, "createdAt", "updatedAt", id_usuario) 
VALUES ('Leche4', 'Leche', 2.4 ,'Es una Leche4 para vender',4, NOW(), NOW(), 4);

--Llenado de tabla Imagenes
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_producto, id_punto) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 1, null);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_producto, id_punto) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', null, 2);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_producto, id_punto) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 3, null);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_producto, id_punto) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', null, 4);

--Llenado de tabla Comentarios
INSERT INTO public."Comentarios" (mensaje_comentario, id_punto) 
VALUES ('Este es un mensaje para el pendejisimo1', 1);
INSERT INTO public."Comentarios" (mensaje_comentario, id_punto) 
VALUES ('Este es un mensaje para el pendejisimo2', 2);
INSERT INTO public."Comentarios" (mensaje_comentario, id_punto) 
VALUES ('Este es un mensaje para el pendejisimo3', 3);
INSERT INTO public."Comentarios" (mensaje_comentario, id_punto) 
VALUES ('Este es un mensaje para el pendejisimo4', 4);
--Llenado de tabla usuarios
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Jimmy', 'Granizo', 'granizo1998@hotmail.com', 'Granizo1998', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Luuis', 'Granizo', 'granizo19@hotmail.com', 'Granizo19', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Andres', 'Granizo', 'granizo@hotmail.com', 'Granizo', NOW(), NOW());
INSERT INTO public."Usuarios" (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, "createdAt", "updatedAt") 
VALUES ('Jonna', 'Granizo', 'grani@hotmail.com', 'Grani', NOW(), NOW());


--Llenado de tabla articulo
INSERT INTO public."Articulos" (nombres_articulo, etiqueta_articulo, descripcion_articulo, likes_articulo, "createdAt", "updatedAt") 
VALUES ('Leche', ' Lacteo', 'Es una Leche para vender',2, NOW(), NOW());
INSERT INTO public."Articulos" (nombres_articulo, etiqueta_articulo, descripcion_articulo, likes_articulo, "createdAt", "updatedAt") 
VALUES ('Queso', ' Lacteo', 'Es una Queso para vender',3, NOW(), NOW());
INSERT INTO public."Articulos" (nombres_articulo, etiqueta_articulo, descripcion_articulo, likes_articulo, "createdAt", "updatedAt") 
VALUES ('Yogurt', ' Lacteo', 'Es una Yogurt para vender',4, NOW(), NOW());
INSERT INTO public."Articulos" (nombres_articulo, etiqueta_articulo, descripcion_articulo, likes_articulo, "createdAt", "updatedAt") 
VALUES ('Quesillo', ' Lacteo', 'Es una Quesillo para vender',5, NOW(), NOW());


--Llenado de tabla Imagenes
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_articulo) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 1);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_articulo) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 2);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_articulo) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 3);
INSERT INTO public."Imagenes" (url_imagen, id_imagen_cloudinary, id_articulo) 
VALUES ('http://res.cloudinary.com/dg2squ3zi/image/upload/v1700629238/uzb0gzycaq0px3itpmru.jpg', 'uzb0gzycaq0px3itpmru', 4);

--Llenado de tabla productos
INSERT INTO public."Productos" (precio_producto, id_articulo) 
VALUES (12, 1);
INSERT INTO public."Productos" (precio_producto, id_articulo) 
VALUES (13, 2);
INSERT INTO public."Productos" (precio_producto, id_articulo) 
VALUES (14, 3);
INSERT INTO public."Productos" (precio_producto, id_articulo) 
VALUES (15, 4);

--Llenado de tabla Usuario_Articulos
INSERT INTO public."Usuario_Articulos" (id_articulo, id_usuario) 
VALUES (1, 1);
INSERT INTO public."Usuario_Articulos" (id_articulo, id_usuario) 
VALUES (2, 2);
INSERT INTO public."Usuario_Articulos" (id_articulo, id_usuario) 
VALUES (3, 3);
INSERT INTO public."Usuario_Articulos" (id_articulo, id_usuario) 
VALUES (4, 4);
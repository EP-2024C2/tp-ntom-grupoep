const imagenRegExp = new RegExp(/.*\.(jpg|jpeg|png|gif|bmp|webp)$/i)


const validateImagenUrl = (urlImagen) => {
    if (!imagenRegExp.test(urlImagen)) {
        throw new Error('La extensión de la imagen no se reconoce');
    }
    return urlImagen;
};

module.exports = validateImagenUrl
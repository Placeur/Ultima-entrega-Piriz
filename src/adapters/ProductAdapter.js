export const createProductAdapterFromFirebase = (doc) => {
    const data = doc.data()
    return {
        id: doc.id,
        nombre: data.nombre,
        category: data.category,
        img: data.img,
        precio: data.precio,
        stock: data.stock,
        descripcion: data.descripcion
    }
}
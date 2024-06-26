const { getAll, create, getAllPostsByAuthor, getOneAuthor, updateById, deleteById } = require('../models/autor.model');

// Obtener todos los registros
// GET /api/autor
const all = async (req, res) => {
	try {
		const [autor] = await getAll();
		if (autor.length === 0) return res.status(404).json({
			status: "error",
			msg: "No se han encontrado autor"
		})

		return res.status(200).json({
			status: "success",
			msg: "Listado de autores",
			autor
		})
	} catch (error) {
		res.json({ error: error.message })
	}
}

// Obtener el registro de autor por id y todos sus posts
// GET /api/autor/:id
const one = async (req, res) => {
	const { id } = req.params;

	try {

		const [autor] = await getOneAuthor(id);

		const [postsAutor] = await getAllPostsByAuthor(id);

		if (autor.length === 0) return res.status(404).json({
			status: "error",
			msg: "No se ha encontrado ningún autor con ese ID"
		})

		return res.status(200).json({
			status: "success",
			msg: `autor con el ID: ${id}`,
			autor,
			postsAutor
		})
	} catch (error) {
		res.json({ error: error.message })
	}

}

// Insertar un nuevo autor
// POST /api/autor
const register = async (req, res) => {
	try {
		const [result] = await create(req.body);
		const [autor] = await getOneAuthor(result.insertId)
		if (autor.length === 0) return res.status(404).json({
			status: "error",
			msg: "No se ha podido insertar el autor"
		})

		return res.status(200).json({
			status: "success",
			msg: "Autor registrado en la base de datos",
			autor
		})
	} catch (error) {
		res.json({ error: error.message })
	}
}

// Actualizar un autor
// PUT /api/autor/:id
const update = async (req, res) => {
	const { id } = req.params;
	try {
		await updateById(id, req.body);
		const [autor] = await getOneAuthor(id);
		if (autor.length === 0) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado el autor con ID: ${id}`
		})
		return res.status(200).json({
			status: "success",
			msg: `Actualización del autor con ID: ${id}`,
			autor: autor[0]
		});
	} catch (error) {
		res.json({ error: error.message })
	}

}

// Eliminar un autor
// DELETE /api/autor/:id
const erase = async (req, res) => {
	const { id } = req.params;
	try {
		const [autor] = await getOneAuthor(id);
		await deleteById(id);
		if (autor.length === 0) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado el autor con ID: ${id}`
		})
		return res.status(200).json({
			status: "success",
			msg: `Eliminación del autor con ID: ${id}`,
			autor: autor[0]
		});
	} catch (error) {
		res.json({ error: error.message })
	}

}

module.exports = {
	all,
	one,
	register,
	update,
	erase
}
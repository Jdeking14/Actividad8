// Obtención de los autores
const getAll = () => {
	return db.query('select * from autor');
}

// Recuperar un autor
const getOneAuthor = (autorId) => {
	return db.query('select a.name, a.email, a.image from autor as a where a.id = ?', [autorId]);
}

// Recuperación de los posts escritos por un mismo autor
const getAllPostsByAuthor = (autorId) => {
	return db.query("SELECT p.title, p.description, p.creation_date as 'fecha creación', p.category FROM post as p WHERE p.autor_id = (SELECT a.id FROM autor as a WHERE a.id = ?)", [autorId]);
}

// Creación de un nuevo registro de autor
const create = ({ name, email, image }) => {
	return db.query(
		'insert into autor (name, email, image) values (?, ?, ?)',
		[name, email, image]
	)
}

// Actualización completa de un registro de autor
const updateById = (id, { name, email, image }) => {
	return db.query(
		'update autor set name = ?, email = ?, image = ? where id = ?',
		[name, email, image, id]
	)
}

// Borrado de un autor
const deleteById = (id) => {
	return db.query('delete from autor where id = ?', [id])
}

module.exports = {
	getAll,
	getOneAuthor,
	getAllPostsByAuthor,
	create,
	updateById,
	deleteById
}
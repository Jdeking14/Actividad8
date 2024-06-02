// Obtención de los posts
const getAll = () => {
	// return db.query('select * from posts');
	return db.query("select p.title, p.description, p.creation_date as 'fecha creación', p.category, a.name as 'autor', a.email, a.image from post as p, autor as a where p.autor_id = a.id");
}

const getById = (postId) => {
	return db.query('select * from post where id = ?', [postId]);
}

// Creación de un nuevo registro de post
const create = ({ title, description, fecha_creacion = new Date(), category, autor_id }) => {
	fecha_creacion = fecha_creacion.getFullYear() + "-" + (fecha_creacion.getMonth() + 1) + "-" + fecha_creacion.getDate();

	return db.query(
		'insert into post (title, description, creation_date, category, autor_id) values (?, ?, ?, ?, ?)',
		[title, description, fecha_creacion, category, autor_id]
	)
}

// Actualización completa de un registro de posts
const updateById = (id, { title, description, fecha_creacion = new Date(), category, autor_id }) => {
	fecha_creacion = fecha_creacion.getFullYear() + "-" + (fecha_creacion.getMonth() + 1) + "-" + fecha_creacion.getDate();

	return db.query(
		'update post set title = ?, description = ?, creation_date = ?, category = ?, autor_id = ? where id = ?',
		[title, description, fecha_creacion, category, autor_id, id]
	)
}

// Borrado de un post
const deleteById = (id) => {
	return db.query('delete from post where id = ?', [id])
}

module.exports = {
	getAll,
	getById,
	create,
	updateById,
	deleteById
}
const validateBook = ({ name, pageCount, readPage, isUpdate = false }) => {
  if (!name) {
    return {
      error: true,
      code: 400,
      message: isUpdate
        ? "Gagal memperbarui buku. Mohon isi nama buku"
        : "Gagal menambahkan buku. Mohon isi nama buku",
    };
  }

  if (readPage > pageCount) {
    return {
      error: true,
      code: 400,
      message: isUpdate
        ? "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        : "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    };
  }

  return {
    error: false,
  };
};

module.exports = { validateBook };

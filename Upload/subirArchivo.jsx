const subirArchivo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(
    "http://localhost:3001/upload",
    formData
  );

  console.log(res.data.file);
};

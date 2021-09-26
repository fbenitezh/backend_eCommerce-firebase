const fs = require("fs");

class ContenedorFirebase {
  constructor(schema) {
    //console.log(schema);
    this.schema = schema;
  }

  async listResource() {
    try {
      let content = await fs.promises.readFile(this.schema, "utf-8");
      if (content == "") return [];
      return JSON.parse(content);
    } catch (error) {
      throw new Error(error);
    }
  }

  async addResource(data) {
    try {
      let contenido = await fs.promises.readFile(this.schema, "utf-8");
      data.id = 1;
      if (contenido != "") {
        contenido = JSON.parse(contenido);
        data.id = contenido[contenido.length - 1].id + 1;
      }
      let array = [...contenido, data];
      await fs.promises.writeFile(this.schema, JSON.stringify(array, null, 2));
      return data.id;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateResource(data, id) {
    try {
      let contenido = await fs.promises.readFile(this.schema, "utf-8");
      contenido = JSON.parse(contenido);
      let index = null;
      let producto = null;
      contenido.map((prd, key) => {
        if (prd.id == id) {
          producto = prd;
          index = key;
          return;
        }
      });

      producto = data;

      contenido[index] = producto;
      await fs.promises.writeFile(
        this.schema,
        JSON.stringify(contenido, null, 2)
      );
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteResource(id) {
    try {
      let contentFile = await fs.promises.readFile(this.schema, "utf-8");
      if (contentFile == "") return "Nada para eliminar";
      contentFile = JSON.parse(contentFile);
      let nuevoContenido = contentFile.filter((item) => item.id != id);
      nuevoContenido =
        nuevoContenido.length == 0
          ? ""
          : JSON.stringify(nuevoContenido, null, 2);
      await fs.promises.writeFile(this.schema, nuevoContenido);
      return "Producto eliminado";
    } catch (error) {
      throw new Error(error);
    }
  }

  getSchema() {
    return this.schema;
  }
}

export default ContenedorFirebase;

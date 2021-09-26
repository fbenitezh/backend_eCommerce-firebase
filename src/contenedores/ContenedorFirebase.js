import admin from "firebase-admin";
import * as serviceAccount from "../../firebase-settings.json";

class ContenedorFirebase {
  constructor(schema) {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount.default),
    });
    this.db = admin.firestore();
    this.query = this.db.collection(schema);
  }

  async listResource() {
    try {
      const data = await this.query.get();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addResource(data) {
    try {
      const doc = this.query.doc();
      await doc.create(data);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateResource(data, id) {
    try {
      const doc = this.query.doc(`${id}`);
      const item = await doc.update({data});
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteResource(id) {
    try {
      const doc = this.query.doc(`${id}`);
      const item = await doc.delete();
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ContenedorFirebase;

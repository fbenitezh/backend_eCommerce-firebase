import admin from "firebase-admin";
import * as serviceAccount from "../../firebase-settings.json";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.default),
});

class FirebaseService{
  constructor(collection) {
    this.db = admin.firestore();
    this.query = this.db.collection(collection);
  }

  async addResource(data){
    try {
      const doc = this.query.doc();
      await doc.create(data);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateResource(data,id){
    try {
      const doc = this.query.doc(`${id}`);
      const item = await doc.update(data);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteResource(id){
    try {
      const doc = this.query.doc(id);
      await doc.delete();
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listResource(id=null){
    try {
      if(id){
        const doc = this.query.doc(id);
        const data = await doc.get();
        return {id:data.id,...data.data()};
      }
      const querySnapshot = await this.query.get();
      let docs = querySnapshot.docs;
      const data = docs.map(doc=>({
        _id:doc.id,
        ...doc.data()
      }));
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  
}

export default FirebaseService;
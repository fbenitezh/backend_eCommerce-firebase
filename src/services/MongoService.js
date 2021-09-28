import mongoose from 'mongoose';

class MongoService {
  constructor(schema,collection) {
    this.schema = mongoose.model(collection, schema);
  }

  async listResource() {
    try {
      const data = await this.schema.find();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listOneResource(id) {
    try {
      const data = await this.schema.find({_id:mongoose.Types.ObjectId(id)});
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addResource(data) {
    try {
      const response = await this.schema.insertMany([data]);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateResource(data, id) {
    try {
      const response = await this.schema.updateOne({_id:mongoose.Types.ObjectId(id)},data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteResource(id) {
    try {
      const response = await this.schema.deleteOne({_id:mongoose.Types.ObjectId(id)});
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  getSchema() {
    return this.schema;
  }
}

export default MongoService;

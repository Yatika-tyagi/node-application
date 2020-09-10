import mongoose, { Schema } from "mongoose";

class RoleModel {
    initSchema() {
        const schema = new Schema(
            {
                user_id: {
                    type: String,
                    required: true,
                },
                role_name: {
                    type: String,
                    required: true,
                },
                permission: {
                    type: Array,
                    required: true,
                },
            }, { timestamps: true }
        )
        mongoose.model("RoleModel", schema);
    }
    getInstance() {
        this.initSchema();
        return mongoose.model("RoleModel");
    }
}
export default RoleModel;
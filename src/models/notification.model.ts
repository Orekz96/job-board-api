import { Schema, model, SchemaTypes } from "mongoose";
import { INotification, NotificationsStatus } from "../types";
import BaseModel from "./base-model";

const notificationSchema = new Schema<INotification>({
    user_id: { type: SchemaTypes.ObjectId, ref: "User", required: true },
    message: { type: SchemaTypes.String, required: true },
    status: {type: SchemaTypes.String, enum: NotificationsStatus, default: NotificationsStatus.UNREAD, required: true}
});

notificationSchema.loadClass(BaseModel);

export const Notification = model<INotification>('Notification', notificationSchema);
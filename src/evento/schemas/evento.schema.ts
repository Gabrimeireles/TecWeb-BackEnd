import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

@Schema({
    timestamps: true,
})
export class Evento {
    @Prop()
    nome: string;

    @Prop()
    descricao: string;

    @Prop()
    local: string;

    @Prop()
    data: string;

    @Prop()
    hora: string;

    @Prop()
    valor: string;

    @Prop()
    criadoEm: string;

    @Prop() 
    atualizadoEm: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop() 
    image: string;
}

export const EventoSchema = SchemaFactory.createForClass(Evento);
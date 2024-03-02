import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
 
export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone:  string;
    memberPassword?: string;
    memberAdress?: string;
    memberDesc?: string;
    memberPoints : number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAdress?: string;
    memberDesc?: string;
    memberPoints?: number;
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;


}
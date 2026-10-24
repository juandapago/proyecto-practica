import { Module } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Authors {
    @PrimaryGeneratedColumn()
    authorId: number

    @Column({type: 'varchar', length: 100})
    country: string;

    @Column({type: 'varchar', length: 100})
    name: string;
}


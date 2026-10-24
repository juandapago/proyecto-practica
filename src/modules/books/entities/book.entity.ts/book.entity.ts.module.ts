import { Module } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Books {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    authorId: number

    @Column({length: 150, type: 'varchar'})
    title: String

    @Column({type: 'date'})
    publishDate: String

    @Column()
    pages: number

    @Column({type: 'decimal', precision: 10, scale:2})
    price: number
}

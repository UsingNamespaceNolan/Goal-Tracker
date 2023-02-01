import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainGoalTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
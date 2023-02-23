import { Goal } from 'src/goals/goal';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainGoalTable implements Goal{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({default: false})
    complete: boolean;

    @Column({nullable: true})
    completeBy: Date | null;
    
}
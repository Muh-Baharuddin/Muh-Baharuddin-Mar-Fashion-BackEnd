import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  KARYAWAN = 'karyawan',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.KARYAWAN,
  })
  role: UserRole;
}

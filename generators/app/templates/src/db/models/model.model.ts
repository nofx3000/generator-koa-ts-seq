import { Table, Column, Model } from "sequelize-typescript";

@Table({
  timestamps: false,
})
export default class SomeModel extends Model {
  @Column({
    allowNull: false,
  })
  name!: string;
}

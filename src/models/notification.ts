import { Sequelize, Table, Column, Model, HasMany, AutoIncrement, PrimaryKey, AllowNull, DataType, Default } from 'sequelize-typescript'

@Table({ paranoid: true, freezeTableName: false, timestamps: true })
export class Notification extends Model<Notification> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column({ type: DataType.BIGINT(11).UNSIGNED, comment: 'sender' })
  fromId: number

  @AllowNull(false)
  @Column({ type: DataType.BIGINT(11).UNSIGNED, comment: 'receiver' })
  toId: number

  @AllowNull(false)
  @Column({ type: DataType.STRING(128), comment: 'msg type' })
  type: string

  @Column(DataType.STRING(128))
  param1: string

  @Column(DataType.STRING(128))
  param2: string

  @Column(DataType.STRING(128))
  param3: string

  @AllowNull(false)
  @Default(false)
  @Column
  readed: boolean
}
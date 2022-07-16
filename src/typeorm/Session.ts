import { ISession } from 'connect-typeorm';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'session' })
export class SessionEntity implements ISession {
  @Index()
  @Column('bigint')
  expiredAt: number = Date.now();

  @PrimaryColumn('varchar', { length: 255 })
  id = '';

  @Column('text')
  json = '';
}

import * as roomCatalog from '../../models/room.js';
import { User } from '../../models/user.js';

test('roomCatalog and User modules integration', () => {
  roomCatalog.init();
  const user = new User(1, 'test', 'test@test.com', '01-01-2000', 'Male', 'password', 'user');
  expect(user.name).toBe('test');
  expect(roomCatalog.roomDoc).toBeDefined();
});

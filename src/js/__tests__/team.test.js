import Team from '../team';

test('1', () => {
  const team = new Team();
  expect([...team.elements]).toBeDefined();
})
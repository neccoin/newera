this.db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [
    { role: 'userAdmin', db: 'newera' },
    { role: 'dbAdmin', db: 'newera' },
    { role: 'readWrite', db: 'newera' },
  ],
});

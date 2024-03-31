class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.nTimesFirst = 0;
  }
  
  addScore() {
    return this.score++;
  }
};

const userNames = [
    ('Ciccio'),
    ('Paolo-Z'),
    ('Freddy Caffettino'),
    ('Tonno RioMario'),
    ('Lio prod.'),
    ('Berto 120Zebre'),
    ('Skicicci'),
    ('Lil Gianni'),
    ('Young Morelli')
];

const user = userNames.map(data => new User(data));

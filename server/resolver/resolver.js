const resolver = {
  Query: {
    books: () => [
      { id: 1, name: 'Dế mèn phiêu lưu ký', genre: 'Phiêu lưu' },
      { id: 2, name: 'Làm giàu không khó', genre: 'Triết lý' },
    ],
  },
};

module.exports = resolver;

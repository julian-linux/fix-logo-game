export const item = {
  type: 'type',
  id: 'Z',
};

export const expectedItem = { img: 'z_img', id: 'Z', isEmpty: false };

export const pattern = [
  { img: 'z_img', id: 'Z', isEmpty: false },
  { img: 'o_img', id: 'O_1', isEmpty: false },
  { img: 'o_img', id: 'O_2', isEmpty: false },
  { img: 'v_img', id: 'V', isEmpty: false },
  { img: 'u_img', id: 'U', isEmpty: false },
];

export const incorrectPattern = [
  { img: 'v_img', id: 'V', isEmpty: false },
  { img: 'u_img', id: 'U', isEmpty: false },
  { img: 'z_img', id: 'Z', isEmpty: false },
  { img: 'o_img', id: 'O_1', isEmpty: false },
  { img: 'o_img', id: 'O_2', isEmpty: false },
];

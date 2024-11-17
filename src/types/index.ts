export type Task = {
  id: string;
  title: string;
  timeSpent: number;
  //todo 自由のカテゴリーにする
  category: 'Work' | 'Health' | 'Leisure' | 'Family';
};
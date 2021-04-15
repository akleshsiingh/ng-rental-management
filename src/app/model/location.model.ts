export interface Subcategory {
  name: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Branch {
  branch_id: string;
  name: string;
  categories: Category[];
}

export interface Location {
  dealers_id: string;
  opco: string;
  name: string;
  branches: Branch[];
}

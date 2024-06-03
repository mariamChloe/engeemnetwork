/*export interface ICategory {
    id: number,
    name: string,
    subCategories: ISubCategory[]
}
export interface ISubCategory {
    id: number,
    name: string,
    products: IProduct[]
}
export interface IProduct {
    id: number,
    name: string,
    isNew: boolean,
    logo: string,
    banner: string,
    description: string,
    price: number,
    inCart: boolean,
    period: string,
    devise: string,
    facturationPlans: IFacturationPlan[],
    selectedPlan: IFacturationPlan
}
export interface IFacturationPlan {
    id: number,
    name: string,
    price: number,
    period: string,
    devise: string
}*/


export interface ICategory {
  id: number;
  name: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  id: number;
  name: string;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  shortName: string;
  name: string;
  isNew: boolean;
  logo: string;
  banner: string;
  description: string;
  inCart: boolean;
  devise: EDevise;
  unit: EUnit;
  volume: number;
  facturationPlans: IFacturationPlan[];
  selectedSupport: ISupport|null;
  selectedPlan: IFacturationPlan;
}

export interface IFacturationPlan {
  id: number;
  name: string;
  price: number;
  period: number;
}

export interface ISupport {
  id: number,
  name: string,
  description: string,
  availabilityTime: string
}

export enum EDevise {
  Eur = "EUR",
}

export enum EUnit {
  DeuT = "DEU-T",
  Gbps = "Gbps",
  Users = "Users",
}

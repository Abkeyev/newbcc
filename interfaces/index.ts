export interface MenuProps {
  id: number;
  inverseParentHeadNavigation: MenuProps[];
  isdropdown: boolean;
  isexternal: boolean;
  link: string;
  title: string;
}

export interface TarifsProps {
  title: string;
  date: string;
  url: string;
}

export interface ButtonProps {
  id: number;
  buttonColor: 'primary' | 'secondary';
  buttonLink: string;
  buttonText: string;
  buttonType: "contained" | "outlined";
}

export interface ButtonsProps {
  button: ButtonProps;
}

export interface TabProps {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
}

export interface TabsProps {
  id: number;
  title: string;
  color: string;
  tabs: TabProps[];
}

export interface OrderProps {
  id: number;
  productName: string;
  productCode: string;
  processDefinitionKey: string;
  actionCategory: string;
  actionAction: string;
  afterActionCategory: string;
  afterActionAction: string;
}

export interface BenefitItemProps {
  id: number;
  title: string;
  image: string;
  content: string;
}

export interface BenefitsProps {
  id: number;
  color: string;
  title: string;
  benefitItems: BenefitItemProps[];
}

export interface ChipProps {
  id: number;
  title: string;
  type: "contained" | "outlined";
  color: string;
}

export interface ChipsProps {
  chip: ChipProps;
}

export interface SlideProps {
  id: number;
  backgroundColor: string;
  content: string;
  disabled: boolean;
  image: string;
  subtitle: string;
  title: string;
  isFull: boolean;
}

export interface SliderProps {
  button: ButtonProps;
  button2: ButtonProps;
  slider: SlideProps;
}

export interface CurrencyProps {
  currency: string;
  dateTime: string;
  purchase: number;
  sell: number;
}

export interface Breadcrumbs {
  title: string;
  link: string | null;
  isExternal: boolean;
}

export interface SliderPageProps {
  slider: SliderProps[] | [];
  breadcrumbs?: Breadcrumbs[];
}


export interface FaqsProps {
  question: string;
  answer: string;
}

export interface FaqCatProps {
  id: number;
  name: string;
  faqs: FaqsProps[];
}

export interface FaqProps {
  id: number;
  name: string;
  faqs: FaqsProps[];
  subcategories: FaqCatProps[];
}

export interface FaqFilterProps {
  id: number;
  name: string;
  parent: boolean;
  faqs: FaqsProps[];
}

export interface CardFullProps {
  id: number;
  content: any;
  title: string;
  subtitle: string;
  image: string;
}

export interface CardsFullProps {
  card: CardFullProps;
  buttons: ButtonProps[];
  chips: ChipProps[];
}

export interface CardProps {
  id: number;
  cardType: "vertical" | "horizontal";
  content: any;
  title: string;
  image: string;
}

export interface CategoryProps {
  name: string;
  categoryId: number;
  cards: CardsProps[];
}

export interface CardsProps {
  card: CardProps;
  buttons: ButtonsProps[];
  chips: ChipsProps[];
}

export interface CardsPageProps {
  slider: CardsProps[];
  withCategories: CategoryProps[];
  withoutCategories: CardsProps[];
}

export interface NewsProps {
  id: number;
  title: string;
  publishDate: Date;
  content: string;
  contentShort: string;
}

export interface CallCenterProps {
  id: number;
  title: string;
  content: string;
}
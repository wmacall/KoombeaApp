export interface IInfoCardProps {
  objectID: string;
  name: string;
  universe: string;
  price: string;
  popular: boolean;
  rate: number;
  downloads: string;
  description: string;
  created_at: string;
  imageURL: string;
  onPressCard: (item: any) => void;
}

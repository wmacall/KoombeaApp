export interface IRatingProps {
  rating: number;
  width?: number;
  height?: number;
  onPressStar?: (index: number) => void;
  disabled?: boolean;
}

export interface IHeaderProps {
  text?: string;
  showBackButton?: boolean;
  showFilterButton?: boolean;
  onPressFilterButton?: () => void;
  onPressGoBack?: () => void;
}

export interface SelectorProps {
  value: string;
  setValue: (text: string) => void;
  title: string;
  options: Array<{id: number; text: string}>;
}

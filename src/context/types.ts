export interface TasksProps {
  id: string;
  title: string;
  deadLine: string;
  startTime: string;
  endTime: string;
  remind: string;
  repeat: string;
  isFavorite: boolean;
  isFinished: boolean;
  createdAt: Date;
}

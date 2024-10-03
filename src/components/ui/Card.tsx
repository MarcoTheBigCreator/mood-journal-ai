import { cn } from '@/lib';

export const Card = ({ className, children }: Card) => {
  return (
    <div className={cn('rounded-lg border shadow-sm', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children }: Card) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }: Card) => {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
};

export const CardFooter = ({ className, children }: Card) => {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)}>
      {children}
    </div>
  );
};

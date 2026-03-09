interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedIcon = ({ children, className = "" }: AnimatedIconProps) => (
  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 ${className}`}>
    {children}
  </div>
);

export default AnimatedIcon;

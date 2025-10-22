export type BookingFields = {
  name: string;
  phone: string;
  date: string;
  passengers: string;
  vehicle: string;
  pickup: string;
  notes?: string;
};

export type Service = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
};

export type WhyUs = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
};



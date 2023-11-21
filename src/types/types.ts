export interface MainImageType {
  CreatedAt: string;
  DeletedAt: string | null;
  ID: number;
  UpdatedAt: string;
  url: string;
}

export interface ImageType {
  CreatedAt: string;
  DeletedAt: string | null;
  ID: number;
  UpdatedAt: string;
  url: string;
}

export interface LocationType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Name: string;
  Description: string;
  StreetName: string;
  Address: string;
  PostCode: string;
  City: string;
  Latitude: string;
  Longitude: string;
  UserID: number;
}


export interface PostType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  brand: string;
  brand_model: string;
  vehicle_type: string;
  year: number;
  transmission: string;
  fuel_type: string;
  price_per_day: number;
  price_per_week: number;
  price_per_month: number;
  price_per_day_after_discount: number;
  price_per_week_after_discount: number;
  price_per_month_after_discount: number;
  discount_percentage: number;
  bookable: boolean;
  body_color: string;
  license_plate: string;
  available: boolean;
  UserID: number;
  MainImage: MainImageType;
  Images: ImageType[];
  location_id: number;
}


export interface UserType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  publicUsername: string;
  name: string;
  about: string;
  gender: string;
  role: string;
  is_active: string; // Consider changing to boolean if it's a boolean value in your application
  AccountID: number;
}

export interface AccountType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  username: string;
  email: string;
  email_verified: boolean;
  phone: string;
}
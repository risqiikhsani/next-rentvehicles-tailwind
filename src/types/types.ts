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

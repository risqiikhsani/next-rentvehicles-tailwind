

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
  MainImage: ImageType;
  Images: ImageType[];
  location_id: number | string;
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

export interface RentDetailType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  license_plate: string;
  pickup_date: string;
  return_date: string;
  is_paid: boolean;
  estimated_final_price: number;
  estimated_normal_price: number;
  estimated_saved_price: number;
  rent_days: number;
  decline_reason: string;
  status: string;
  Images: ImageType[]; // Adjust the type for Images based on its actual structure if known
  text: string;
  RentID: number;
}

export interface RentType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  user_id: number;
  post_id: number;
  start_date: string;
  end_date: string;
  payment_method: string;
  is_cancelled: boolean;
  cancel_reason: string;
  discount_voucher: string;
  readonly: boolean;
  RentDetail: RentDetailType;
}

export interface EstimatedPriceType {
  estimated_final_price: number;
  estimated_normal_price: number;
  estimated_saved_price: number;
  post_id: number;
  rent_days: number;
  voucher_code: string;
};

export interface FavoriteType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  UserID: number;
  PostID: number;
}

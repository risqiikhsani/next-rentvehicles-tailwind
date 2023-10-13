import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/solid";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/typography/Title";
import Specification from "./_page/Specification";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Review from "@/components/review";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    user: {
      name: "kucing imut",
      address: "California, US",
    },
    review_stars: 5,
    review_title: "clean car !",
    review_text:
      "the car I use is super clean and like a new car . definately worth to rent ! thank you to this website , I'll do my next rent soon",
  },
  // Add more reviews here...
  {
    user: {
      name: "John Doe",
      address: "New York, US",
    },
    review_stars: 4,
    review_title: "Great Service",
    review_text:
      "I had a great experience renting from this website. The car was in good condition, and the service was excellent.",
  },
  {
    user: {
      name: "Alice Smith",
      address: "London, UK",
    },
    review_stars: 5,
    review_title: "Highly Recommend",
    review_text:
      "The cars available for rent are fantastic, and the booking process was smooth. Will definitely rent again.",
  },
  {
    user: {
      name: "Emily Johnson",
      address: "Chicago, US",
    },
    review_stars: 5,
    review_title: "Excellent Experience",
    review_text:
      "I rented a car from this website, and it was a fantastic experience. The car was clean and well-maintained, and the customer service was top-notch. I highly recommend it!",
  },
  {
    user: {
      name: "David Smith",
      address: "Los Angeles, US",
    },
    review_stars: 4,
    review_title: "Smooth Rental Process",
    review_text:
      "Renting a car from this website was a breeze. The booking process was straightforward, and the car was ready on time. The only minor issue was the gas tank not being completely full, but overall, it was a good experience.",
  },
  {
    user: {
      name: "Sophia Lee",
      address: "San Francisco, US",
    },
    review_stars: 5,
    review_title: "Impressive Selection",
    review_text:
      "I was impressed with the wide selection of cars available for rent on this website. I was able to find the perfect car for my trip, and it made my vacation even more enjoyable.",
  },
  {
    user: {
      name: "Michael Brown",
      address: "Miami, US",
    },
    review_stars: 3,
    review_title: "Decent Rental",
    review_text:
      "The car I rented was in decent condition, but I did encounter some minor issues with the air conditioning. It could have been better, but it got the job done.",
  },

  // Add more reviews as needed...
];

export default function Page() {
  return (
    <>
      <Title title="Post Detail" />
      <div className="lg:grid lg:grid-cols-3 gap-4">
        <div className="lg:sticky lg:h-screen lg:top-20 lg:left-0 static">
          <Image src="/car1.png" alt="pic" width={500} height={500} />
          <div className="flex gap-4 my-10">
            <Button variant="outline" className="rounded-xl w-full">
              <HeartIcon className="w-4 h-4 mr-2" />
              Favorite
            </Button>
            <Button variant="outline" className="rounded-xl w-full">
              <LockClosedIcon className="w-4 h-4 mr-2" />
              Book
            </Button>
          </div>
          <Button className="rounded-xl w-full">
              <KeyIcon className="w-4 h-4 mr-2" />
              Rent
            </Button>
        </div>

        <div className="col-span-2 mt-4 lg:mt-0">
          <Table className="max-w-sm">
            <TableBody>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Brand
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Lamborghini</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Model
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Aventador</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Year
                  </Badge>
                </TableCell>
                <TableCell className="text-left">2015</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Type
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Sport</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Brand
            </Badge>
            <h1 className="font-bold text-xl ml-4">Lamborghini</h1>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Model
            </Badge>
            <h3 className="font-bold text-xl ml-4">Aventador</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Year
            </Badge>
            <h3 className="font-bold text-xl ml-4">2015</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Type
            </Badge>
            <h3 className="font-bold text-xl ml-4">Sport</h3>
          </div> */}

          <div className="flex flex-col justify-end gap-4">
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 my-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Daily Price (1 day)
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$45,231.89</p>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Weekly Price (7 days)
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$45,231.89</p>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Price (30 days)
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$45,231.89</p>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Table className="max-w-sm">
              <TableBody>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Available unit
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">10</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Poster
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">User</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Card>
              <CardHeader>
                <CardTitle>Specification</CardTitle>
                <CardDescription>
                  Detailed vehicle's specification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Specification />
              </CardContent>
            </Card>

            <Separator className="my-4"/>
            <Title title="Reviews" text="See all reviews from consumers" />
            <Button>See reviews</Button>
            {reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

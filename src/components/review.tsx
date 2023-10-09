// components/Review.tsx
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; // 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"



interface ReviewProps {
    user: {
        name: string;
        address: string;
    };
    review_stars: number;
    review_title: string;
    review_text: string;
}



// components/Review.js


function Review({ user, review_stars, review_title, review_text }: ReviewProps) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < review_stars; i++) {
            stars.push(
                <StarIcon
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                />
            );
        }
        return stars;
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-lg">
            <div className="text-gray-700">
                <div className='flex items-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="ml-4">
                        <p className="text-sm">{user.name}</p>
                        <p className="text-sm">{user.address}</p>
                    </div>
                </div>

                <Separator className='my-2'/>

                <p className="text-lg font-semibold">{review_title}</p>
                <div className="flex items-center">
                    {/* Display star rating */}
                    <div className="flex">
                        {renderStars()}
                    </div>
                </div>
                <p className="mt-2">{review_text}</p>
            </div>
        </div>
    );
}




export default Review;
